/* 知识点数据（手工维护，页面按这里渲染）
 *
 * 追加一条记录的方法：在对应学科的 items 数组末尾，照下面这条的格式再加一个 { ... } 对象即可，
 * index.html 不用改，刷新页面就会出现。（学科不存在就新增一个 subject 对象，或往 subjects 里加空学科占位）
 *
 * 追加模板：
 *   {
 *     id: 'ds-002',                          // 唯一标识，建议 学科前缀-序号
 *     title: '知识点名称',
 *     chapter: '章节（例如：图 3.1 图的基本概念 / 存储结构）',
 *     exam: '考频（例如：选择题 1/16，分值 2 分；大题 0/16）',
 *     point: '考点编号（例如：考点 10）',
 *     status: '未掌握',                       // 未掌握 / 重学中 / 已掌握
 *     date: '2026-11-11',                     // 记录日期
 *     link: 'https://...',                    // 重学链接，带时间戳或分P可直接跳到该处
 *     linkNote: 'BOK数据结构强化 P4，从 1:18:22 开始',
 *     conclusion: '核心结论一行'
 *   }
 */
window.KNOWLEDGE_DATA = {
  updated: '2026-11-11',
  subjects: [
    {
      key: 'ds',
      name: '数据结构',
      items: [
        {
          id: 'ds-001',
          title: '十字链表和邻接多重表',
          chapter: '图 3.1 图的基本概念 / 存储结构',
          exam: '选择题 1/16，分值 2 分；大题 0/16',
          point: '考点 10',
          status: '未掌握',
          date: '2026-11-11',
          link: 'https://www.bilibili.com/video/BV1sXZ8BrEZB?t=4702.5&p=4',
          linkNote: 'BOK数据结构强化 P4，从 1:18:22 开始',
          conclusion: '十字链表结合了邻接表和逆邻接表，可以方便地计算顶点 v 的入度和出度、寻找依附于某一结点的所有弧'
        }
      ]
    },
    { key: 'co', name: '计算机组成原理', items: [] },
    { key: 'os', name: '操作系统', items: [] },
    { key: 'cn', name: '计算机网络', items: [] }
  ]
};
