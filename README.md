# something-in-one
------

面向手机的搜索引擎导航。

#### demo
http://www.binaryio.top

------
主要适配手机浏览器,页面设了离线缓存，理论加载一次之后都可以秒开。

------
~~Bootstrap~~ +vue.js+Jquery

##Note 

*出于安全考量，Service workers只能由HTTPS承载，毕竟修改网络请求的能力暴露给中间人攻击会非常危险。*
serviceWorker需要https才能成功注册,所以启用缓存需要部署https。
