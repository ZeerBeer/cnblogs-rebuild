## 博客园 API 重构版

### 已完成功能 

- 反代跨域
- 基本样式
- 代码高亮
- spa
- more标签拆分(摘要实在太难看)

### 计划中(有思路)

- cdn
- 分页(路由)
- 更多样式
- 移动端适配
- 更多部署教程
- vue-webpack
- 更快的响应能力

### 计划中(无思路)

- 文章标签分类等(无api)


### 部署教程

本工程为纯前端工程, 为解决跨域问题, 需要服务器支持方向代理.

- IIS-8.5 

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
