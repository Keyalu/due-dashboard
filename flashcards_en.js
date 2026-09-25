// 英语错词闪卡（数据格式同408闪卡，sub=EN）
// 从 9/23-9/25 三天错词中精选易混词
// 单词用 <span class="en-word"> 高亮（CSS定义荧光笔底色）
window.EN_FLASHCARDS = [
  // === 9/23 形近张冠李戴 ===
  {sub:'EN', hard:true, q:'<span class="en-word">swamp</span> vs <span class="en-word">swap</span>？', a:'<span class="en-word">swamp</span> n.沼泽；v.淹没<br><span class="en-word">swap</span> v./n.交换<br>你把swamp写成"交换"=swap'},
  {sub:'EN', hard:true, q:'<span class="en-word">sweat</span> vs <span class="en-word">sweet</span>？', a:'<span class="en-word">sweat</span> n.汗水；v.出汗<br><span class="en-word">sweet</span> adj.甜的'},
  {sub:'EN', hard:false, q:'<span class="en-word">symptom</span> 是什么？', a:'n.症状，征兆<br>你写成"典型的"=<span class="en-word">typical</span>'},
  {sub:'EN', hard:false, q:'<span class="en-word">puppet</span> 是什么？', a:'n.木偶；傀儡<br>你写成"宠物"=<span class="en-word">pet</span>'},
  {sub:'EN', hard:false, q:'<span class="en-word">rumor</span> vs <span class="en-word">scandal</span>？', a:'<span class="en-word">rumor</span> n.谣言，传闻<br><span class="en-word">scandal</span>/gossip n.绯闻，丑闻'},
  {sub:'EN', hard:false, q:'<span class="en-word">trunk</span> 有哪些意思？', a:'n.树干；躯干；后备箱；象鼻<br>不是"大象"（<span class="en-word">elephant</span>）'},
  {sub:'EN', hard:true, q:'<span class="en-word">tropic</span> vs <span class="en-word">equator</span>？', a:'<span class="en-word">tropic</span> n.回归线；热带<br><span class="en-word">equator</span> n.赤道<br>你把tropic写成"赤道"'},
  {sub:'EN', hard:false, q:'<span class="en-word">curb</span> 什么意思？', a:'v.控制，约束；n.路缘<br><span class="en-word">curb inflation</span> 抑制通胀<br>不是"抓住"（grab）'},
  {sub:'EN', hard:false, q:'<span class="en-word">surge</span> vs <span class="en-word">emerge</span>？', a:'<span class="en-word">surge</span> v./n.激增，涌动<br><span class="en-word">emerge</span> v.浮现，出现'},
  {sub:'EN', hard:false, q:'<span class="en-word">surgeon</span> vs <span class="en-word">surgery</span>？', a:'<span class="en-word">surgeon</span> n.外科医生（-eon指人）<br><span class="en-word">surgery</span> n.外科手术；诊所'},
  {sub:'EN', hard:false, q:'<span class="en-word">murder</span> vs <span class="en-word">murderer</span>？', a:'<span class="en-word">murder</span> n./v.谋杀<br><span class="en-word">murderer</span> n.杀人犯'},

  // === 9/24 形近+词性 ===
  {sub:'EN', hard:true, q:'<span class="en-word">irritate</span> vs <span class="en-word">provoke</span>？', a:'<span class="en-word">irritate</span> v.激怒，使烦躁；使过敏（生理/心理刺激）<br><span class="en-word">provoke</span> v.挑动，激起，导致（provoke a reaction）<br>你两个写反了'},
  {sub:'EN', hard:true, q:'<span class="en-word">rub</span> vs <span class="en-word">rob</span>？<span class="en-word">rubber</span> vs <span class="en-word">robber</span>？', a:'<span class="en-word">rub</span> v.擦，摩擦 → <span class="en-word">rubber</span> n.橡胶/橡皮<br><span class="en-word">rob</span> v.抢劫 → <span class="en-word">robber</span> n.抢劫犯<br>差一个b意思完全不同！'},
  {sub:'EN', hard:true, q:'<span class="en-word">royalty</span> 除了"王室"还有什么意思？', a:'n.王室；<span class="en-word">版税</span>（考研经济类熟词僻义，book royalties 图书版税）'},
  {sub:'EN', hard:true, q:'<span class="en-word">prosper</span> 词性链？', a:'<span class="en-word">prosper</span> v.繁荣（动词！你写成n.经济）<br><span class="en-word">prosperity</span> n.繁荣（名词）<br><span class="en-word">prosperous</span> adj.繁荣的'},
  {sub:'EN', hard:false, q:'<span class="en-word">bulk</span> 什么意思？', a:'n.大量；体积；主体<br>the <span class="en-word">bulk of</span> 大部分<br>不是"桶"（bucket）'},
  {sub:'EN', hard:false, q:'<span class="en-word">crude</span> 什么意思？', a:'adj.天然的，未加工的；粗糙的<br><span class="en-word">crude oil</span> 原油<br>不是"鲁莽的"（reckless）'},
  {sub:'EN', hard:false, q:'<span class="en-word">dwell on</span> 什么意思？', a:'<span class="en-word">dwell</span> v.居住；<span class="en-word">dwell on</span> 细想，详述（阅读常考）'},

  // === 9/25 张冠李戴 ===
  {sub:'EN', hard:true, q:'<span class="en-word">strife</span> / <span class="en-word">strike</span> / <span class="en-word">stroke</span> 区别？', a:'<span class="en-word">strife</span> n.冲突，争斗（internal strife 内乱）<br><span class="en-word">strike</span> v./n.打击；罢工<br><span class="en-word">stroke</span> n.中风；一击；v.抚摸<br>你把strife写成"刀刃"(knife)，stroke写成"撞打"'},
  {sub:'EN', hard:true, q:'<span class="en-word">stuff</span> 的词性？', a:'n.东西，材料；v.填满，塞满<br><span class="en-word">不是形容词</span>！"大量的"是substantial/massive'},
  {sub:'EN', hard:true, q:'<span class="en-word">submerge</span> vs <span class="en-word">emerge</span>？', a:'<span class="en-word">submerge</span> v.淹没，潜入水中（sub-下+merge沉）<br><span class="en-word">emerge</span> v.浮现，出现<br>你把submerge写成"相继出现"'},
  {sub:'EN', hard:false, q:'<span class="en-word">sturdy</span> 什么意思？', a:'adj.结实的，坚固的（sturdy table 结实的桌子）<br>不是"有力的"（powerful）'},
  {sub:'EN', hard:false, q:'<span class="en-word">strive</span> 的搭配？', a:'v.努力，奋斗<br><span class="en-word">strive for sth</span> 争取<br><span class="en-word">strive to do</span> 努力做'},
  {sub:'EN', hard:false, q:'<span class="en-word">strip</span> 的搭配？', a:'v.剥去，剥夺；n.条，带<br><span class="en-word">strip sb. of sth.</span> 剥夺某人某物'},
  {sub:'EN', hard:false, q:'<span class="en-word">strip</span> vs <span class="en-word">stripe</span>？', a:'<span class="en-word">strip</span> n.条，带；v.剥去<br><span class="en-word">stripe</span> n.条纹（衣服/旗子上的）'},

  // === 考研高频对比词 ===
  {sub:'EN', hard:true, q:'<span class="en-word">aural</span> vs <span class="en-word">oral</span>？', a:'<span class="en-word">aural</span> adj.听觉的（au=ear听）<br><span class="en-word">oral</span> adj.口头的，口述的（or=mouth说）'},
  {sub:'EN', hard:true, q:'<span class="en-word">explicit</span> vs <span class="en-word">implicit</span>？', a:'<span class="en-word">explicit</span> adj.明确的，直言的<br><span class="en-word">implicit</span> adj.含蓄的，暗示的<br>考研高频反义对'},
  {sub:'EN', hard:false, q:'<span class="en-word">freight</span> vs <span class="en-word">fright</span>？', a:'<span class="en-word">freight</span> n.货物，货运，运费<br><span class="en-word">fright</span> n.惊吓，恐怖'},
  {sub:'EN', hard:false, q:'<span class="en-word">prism</span> 考研考什么意思？', a:'n.棱镜；棱柱<br><span class="en-word">引申：视角，角度</span>（through the prism of... 透过...的视角，阅读90%考这个比喻义）'}
];
