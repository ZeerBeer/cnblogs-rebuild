## 博客园 API 重构版

### 已完成功能 

- 反代跨域
- 基本样式
- 代码高亮
- spa
- more标签拆分(摘要实在太难看)

### 计划中(有思路)

- cdn OK
- 分页(路由) OK
- 更多样式 OK
- 移动端适配 ERR 不想写了
- 更多部署教程 ERR 不想写了 媒体查询
- vue-webpack ERR 不会
- 更快的响应能力 OK (优化了第一次获取token的时间)

### 计划中(无思路)

- 文章标签分类等(无api) ERR 等博客园 API

### 部署教程

本工程为纯前端工程, 为解决跨域问题, 需要服务器支持方向代理.

- IIS-8.5 

无聊准备
    Application Request Routing -> Enable proxy
    URL重写

配置文件
```xml
<!-- web.config -->
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="cnblogs-token">
                    <match url="^token" negate="false" />
                    <conditions>
                        <add input="{HTTP_HOST}" pattern="^{{YOURDOMAIN}}$" />
                    </conditions>
                    <action type="Rewrite" url="https://oauth.cnblogs.com/connect/token" appendQueryString="false" />
                </rule>
                <rule name="cnblogs-api">
                    <match url="^api/(.*)" />
                    <conditions>
                        <add input="{HTTP_HOST}" pattern="^{{YOURDOMAIN}}$" />
                    </conditions>
                    <action type="Rewrite" url="https://api.cnblogs.com/api/{R:1}" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

- apache 

期待吧

- nginx

期待吧

- caddy1/2 

期待吧

### 日志

2020/9/21 完成基本样式, 使用 flex 布局; 考研百日冲刺开始; 请求 cnblog 最长时间为 6s, trace 回程拥挤;   

2020/9/22 写了路由, 路由监听, 发现写这些很麻烦; beforeUpdate 和 data 死循环, 看样子是要直接操作dom, 双向绑定的劣势显现出来了;

### 后记

![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200922215959223-1532568784.png)

22 日晚十点引入 cdn 删除无用代码, 写 Demo 截图, 终于可以弃坑了.

Vue 的声明周期千万不能操作数据, 否则要出事, Vue 默认双向绑定有利有弊, beforeUpdate updated 循环起来了???

用例
```js
document.querySelectorAll('Selector').forEach(e => {})
```

CSS3 flex 布局真的是一维空间最好用的布局

IIS 反代 跨域发现反代真的强 

网络请求
![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200922221359066-1473901285.png)

三段只有第一段 (token 有过期时间, 期间存活) 可以优化, 第二段并发获取列表, 第三段并发 5 篇文章内容, 无法优化. 当然等博客园那边给接口, 或者自搭服务器, 每小时去访问接口请求数据, 之后统一返回给前端, 缺点是需要服务器和占用服务器无效请求过大, 因为文章更新没有办法判断文章是否更新过, 当然也可以等博客园接口. 

现在博客园给了全局头部, 和 CSDN 一样? 不知道计划搞什么.

OK 就到这