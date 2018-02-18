# XD search
https://www.binaryio.top
------

适配手机的简单搜索引擎导航，单页webapp，默认注册serviceworker以开启cache，只有第一次需要网络加载本页。

## Note 

*出于安全考量，Service workers只能由HTTPS承载，毕竟修改网络请求的能力暴露给中间人攻击会非常危险。*
Service workers需要HTTPS才能成功注册,所以启用cache需要部署HTTPS。
