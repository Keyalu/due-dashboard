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
  {sub:'EN', hard:false, q:'<span class="en-word">prism</span> 考研考什么意思？', a:'n.棱镜；棱柱<br><span class="en-word">引申：视角，角度</span>（through the prism of... 透过...的视角，阅读90%考这个比喻义）'},
  // === 10/23 连线自测：漏连8词 ===
  {sub:'EN', hard:true, q:'<span class="en-word">locomotive</span> 什么意思？', a:'n.火车头，机车；adj.运动的，移动的（loco地方+mot移动=从一地到另一地）'},
  {sub:'EN', hard:false, q:'<span class="en-word">lofty</span> 什么意思？', a:'adj.崇高的，高尚的；高耸的（联想loft阁楼→很高）'},
  {sub:'EN', hard:true, q:'<span class="en-word">discreet</span> vs <span class="en-word">discrete</span>？', a:'<span class="en-word">discreet</span> adj.小心的，慎重的<br><span class="en-word">discrete</span> adj.离散的，分开的<br>考研极高频易混！只差一个字母'},
  {sub:'EN', hard:true, q:'<span class="en-word">discrepancy</span> 什么意思？', a:'n.矛盾，差异，不一致（词根crep≈crack裂开→裂开就有差异，数据/实验类阅读高频）'},
  {sub:'EN', hard:false, q:'<span class="en-word">disguise</span> 什么意思？', a:'v./n.伪装，掩饰<br>in disguise 伪装的<br>dis(去掉)+guise(外表)=去掉真外表'},
  {sub:'EN', hard:false, q:'<span class="en-word">esteem</span> 什么意思？', a:'n./v.尊重，尊敬<br>self-esteem 自尊'},
  {sub:'EN', hard:false, q:'<span class="en-word">contagious</span> 什么意思？', a:'adj.传染的；有感染力的<br>contagious enthusiasm 有感染力的热情'},
  {sub:'EN', hard:false, q:'<span class="en-word">contaminate</span> 什么意思？', a:'v.污染，玷污（环保类阅读高频）'},
  // === 10/23 词义默写（l开头）：词性/张冠李戴 ===
  {sub:'EN', hard:true, q:'<span class="en-word">lively</span> 的词性？', a:'adj.活泼的，生动的！<br>-ly结尾但它是形容词（a lively discussion），不是副词'},
  {sub:'EN', hard:false, q:'<span class="en-word">living</span> 什么意思？', a:'adj.活着的；n.生计，谋生手段<br>make a living 谋生（"生活"是life）'},
  {sub:'EN', hard:false, q:'<span class="en-word">loaf</span> 什么意思？', a:'n.一条（面包）；v.游荡，闲逛<br>loaf around 游手好闲'},
  {sub:'EN', hard:true, q:'<span class="en-word">lobby</span> 是"货车"吗？', a:'不是！货车=lorry/truck<br><span class="en-word">lobby</span> n.大厅，门廊；v.游说（lobbying政治游说）'},
  {sub:'EN', hard:false, q:'<span class="en-word">lodge</span> 什么意思？', a:'v.寄宿；提出（投诉、申请）<br>lodge a complaint 提出投诉（考研阅读高频）'},
  {sub:'EN', hard:true, q:'<span class="en-word">longitude</span> vs <span class="en-word">latitude</span> vs <span class="en-word">length</span>？', a:'<span class="en-word">longitude</span> n.经度<br><span class="en-word">latitude</span> n.纬度<br><span class="en-word">length</span> n.长度（不是longitude！）'},
  {sub:'EN', hard:true, q:'<span class="en-word">discrete</span> 什么意思？', a:'adj.分离的，离散的（vs <span class="en-word">discreet</span>慎重的，考研极爱考）'},
  // === 10/23 词义默写（dis-家族）：全写成"消失" ===
  {sub:'EN', hard:true, q:'<span class="en-word">discretion</span> 什么意思？', a:'n.自行决定权；谨慎<br>at one\'s discretion 由某人自行决定'},
  {sub:'EN', hard:true, q:'<span class="en-word">dismay</span> 是"错过"吗？', a:'不是！错过=miss<br><span class="en-word">dismay</span> n./v.沮丧，惊愕'},
  {sub:'EN', hard:true, q:'<span class="en-word">disposal</span> 是"消失"吗？', a:'不是！消失=disappear<br><span class="en-word">disposal</span> n.处理，处置<br>at one\'s disposal 供某人支配<br>dis(分开)+pose(放)'},
  {sub:'EN', hard:true, q:'<span class="en-word">dispose</span> 是"消失"吗？', a:'不是！<span class="en-word">dispose</span> v.处理，处置<br>dispose of 处理掉<br>dis(分开)+pose(放)'},
  {sub:'EN', hard:true, q:'<span class="en-word">disposition</span> 是"消失"吗？', a:'不是！<span class="en-word">disposition</span> n.性情，倾向（摆放出来的性格）<br>dis(分开)+pose(放)'},
  {sub:'EN', hard:true, q:'<span class="en-word">estate</span> 什么意思？', a:'n.房地产，庄园；财产<br>real estate 房地产（经济类阅读高频）'},
  {sub:'EN', hard:true, q:'<span class="en-word">evade</span> 是"撤退"吗？', a:'不是！撤退=retreat/withdraw<br><span class="en-word">evade</span> v.逃避，规避<br>evade tax 逃税'},
  {sub:'EN', hard:true, q:'<span class="en-word">evaporate</span> 什么意思？', a:'v.蒸发；消失，不复存在（这才是真"消失"）'},
  {sub:'EN', hard:true, q:'<span class="en-word">fond</span> 的词性？', a:'adj.喜欢的！不是名词<br>be fond of 喜欢...（考研极爱考）'},
  // === 10/23 词义默写（mistress页）===
  {sub:'EN', hard:false, q:'<span class="en-word">nuisance</span> 什么意思？', a:'n.讨厌的人/事，麻烦事（阅读常指令人烦恼的事物）'},
  {sub:'EN', hard:true, q:'<span class="en-word">numerical</span> vs <span class="en-word">numerous</span>？', a:'<span class="en-word">numerical</span> adj.数字的（numerical data）<br><span class="en-word">numerous</span> adj.大量的（numer-数+-ous多）'},
  {sub:'EN', hard:true, q:'<span class="en-word">nursery</span> 是"护士"吗？', a:'不是！护士=nurse，护理=nursing<br><span class="en-word">nursery</span> n.托儿所，育幼院；苗圃'},
  {sub:'EN', hard:false, q:'<span class="en-word">nurture</span> 什么意思？', a:'v./n.养育，培养，滋养<br>nature vs nurture 先天 vs 后天（作文高频对比）'},
  // === 10/23 词义默写（r/s/t开头）===
  {sub:'EN', hard:true, q:'<span class="en-word">retort</span> 什么意思？', a:'v./n.反驳，回嘴<br>re(回)+tort(扭)=把话扭回去'},
  {sub:'EN', hard:true, q:'<span class="en-word">retreat</span> 是"对待"吗？', a:'不是！对待=treat<br><span class="en-word">retreat</span> v./n.撤退，退却<br>re(向后)+treat'},
  {sub:'EN', hard:true, q:'<span class="en-word">revolt</span> 什么意思？', a:'v./n.反抗，起义；反感<br>be revolted by 对...反感<br>拼写注意不是revalt'},
  {sub:'EN', hard:true, q:'<span class="en-word">revolve</span> 是"改革"吗？', a:'不是！改革=reform<br><span class="en-word">revolve</span> v.旋转（词根volv=转，地球自转）'},
  {sub:'EN', hard:false, q:'<span class="en-word">stalk</span> 什么意思？', a:'n.茎，秆；v.跟踪，潜行（stalker跟踪狂）'},
  {sub:'EN', hard:true, q:'<span class="en-word">stake</span> 什么意思？', a:'n.股份，利害关系；赌注<br>at stake 处于危险中/利害攸关（熟词僻义，考研高频）'},
  {sub:'EN', hard:false, q:'<span class="en-word">stale</span> 什么意思？', a:'adj.陈腐的，不新鲜的<br>stale news 过时的新闻'},
  {sub:'EN', hard:false, q:'<span class="en-word">staple</span> 什么意思？', a:'n.主食；订书钉；adj.主要的<br>staple food 主食'},
  {sub:'EN', hard:false, q:'<span class="en-word">tram</span> 什么意思？', a:'n.有轨电车（英式常用，阅读可能提及交通工具）'},
  {sub:'EN', hard:true, q:'<span class="en-word">tragic</span> 是"策略"吗？', a:'不是！策略=strategic<br><span class="en-word">tragic</span> adj.悲剧的，悲惨的（tragedy的形容词）'}
];
