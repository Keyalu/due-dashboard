/* 考研进度看板 Service Worker
 *
 * 策略：导航与 manifest 走 network-first —— 在线永远拿最新版，离线才回退缓存。
 *      图标走 cache-first。因此「PC 提交 → 手机看到新版」不需要手动清缓存。
 *      这是本方案刻意的设计：看板每天随 md 变更重生成，缓存钉住旧版是最容易被骂的坑。
 *
 * CACHE 版本号只在改这份 SW 自身逻辑时才需要 bump；内容更新由 network-first 自动带走。
 *
 * 只缓存同源请求：跨域一律直连。主 vault 含个人数据，不把任何第三方内容写进本地缓存。
 */
const CACHE = 'due-dashboard-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', (evt) => {
  // allSettled：单个图标缺失不该让整个 shell 安装失败
  evt.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(SHELL.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (evt) => {
  if (evt.data && evt.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (evt) => {
  const req = evt.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;   // 不同源一律直连，绝不进缓存

  if (req.mode === 'navigate' || url.pathname.endsWith('/manifest.json')) {
    evt.respondWith(networkFirst(req));
  } else {
    evt.respondWith(cacheFirst(req));
  }
});

async function networkFirst(req) {
  let res;
  try {
    res = await fetch(req, { cache: 'no-store' });
  } catch (e) {
    const c = await caches.open(CACHE);
    return (await c.match(req)) || (await c.match('./index.html')) || Response.error();
  }
  if (res && res.ok) {
    const c = await caches.open(CACHE);
    c.put(req, res.clone());
    // 带 ?source=pwa 的启动 URL 与裸 index.html 都要留一份，否则离线冷启动可能落空
    if (req.mode === 'navigate') c.put('./index.html', res.clone());
  }
  return res;
}

async function cacheFirst(req) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && res.ok) c.put(req, res.clone());
    return res;
  } catch (e) {
    return Response.error();
  }
}
