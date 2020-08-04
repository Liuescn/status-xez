// 配置
window.Config = {

  // 站点名
  SiteName: 'XEZ网站监视平台',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur992051-cf0208ef2c6a53d40a221c79',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  
  Navi: [
	/*
    {
      text: 'Homepage',
      url: 'https://xez.cc/'
    },
	*/
  ]
};
