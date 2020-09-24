## 博客园 JS权限 主题版

API 版本因为一些问题没有好的解决方案 弃用

指导思想:

- 一次网络请求和五次网络请求没有本质区别
- 在数据量较小的情况下时间复杂度也不大
- 一次网络请求和十次网络请求**有本质区别**
- 想不起来了

### DEMO

[Zeer x Beer](https://www.cnblogs.com/zeerbeer/)


![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200924221426668-176863367.png)

- 摘要模式 (默认)

![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200924221525450-1156175743.png)

- 预读模式 (拜托摘要限制, 直接安装 more 标签剪断)

![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200924221606079-52251736.png)

用过 Hexo Vuepress 的同学应该深有感触.

### Usage

```html
<div id="sop"></div> <!--表示文章开始 MUST-->
<div id="mop"></div> <!--表示文章更多 MUST-->
<div id="eop"></div> <!--表示文章结束-->
```

![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200924222048195-169463156.png)

### 已完成功能 

- 基本样式
- 代码高亮
- more标签拆分(摘要实在太难看)
- cdn
- 分页 (坑)
- 广告屏蔽 (涛)

### 计划中(有思路)

- 移动端适配 ERR 不想写了
- 标签页 样式 (api 版本由于缺少 API 无法解决)
- 归档页 样式
- valine 无需登录评论
- 导航栏完善 (这个是忘了)

### 部署教程

- [找到博客侧边栏公告，并点击申请JS权限](https://i.cnblogs.com/settings)

![](https://img2018.cnblogs.com/blog/1441691/201907/1441691-20190705111644615-126646111.png)

- 审核通过后

![](https://img2018.cnblogs.com/blog/1441691/201907/1441691-20190705111804081-496294532.png)

- 样式 见 [custom.css](https://github.com/ZeerBeer/cnblogs-rebuild/blob/master/custom.css)

![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200924220943478-1284836978.png)

- 页首代码 见 [header.html](https://github.com/ZeerBeer/cnblogs-rebuild/blob/master/header.html)

![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200924221024213-245984327.png)


- 页尾代码 见 [footer.html](https://github.com/ZeerBeer/cnblogs-rebuild/blob/master/footer.html)

![](https://img2020.cnblogs.com/blog/1955081/202009/1955081-20200924221058453-2035151631.png)

### 后记 

博客园一堆坑 有时间好好聊聊