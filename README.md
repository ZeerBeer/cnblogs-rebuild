# 又一个博客园的 NexT 主题 🎨

> 🎨 又一个 Muse 风格的 NexT 主题, 现在它被移植到 [博客园](//www.cnblogs.com) 平台. 当然, 你可以在 [Github](//github.com/ZeerBeer/cnblogs-theme-next-muse) 看到它的源代码, 如果你喜欢这个主题, 不妨点个⭐Star.

## 🌟 新特性 New Features 

- 🙃 降低耦合, 使用 Webpack 打包
- 😋 文章预读, 可以选在任意位置停下来
- 🙄 路由器, 不同页面不同加载方式
- 🤬 分页器, 博客园万恶的第一页
- 😏 暗夜模式, 妈妈不用担心我系列
- ...

## 🎲 食用说明 

> 使用 cnblogs-theme-next-muse 很简单, 只需要准备一个配置项即可, 剩下的交给我们.

### 准备配置项

```javascript
const themeConfig = {
  env: 'prod',
  mode: 'mix',
  menu: [{
    svg: `
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            `,
    name: 'Home',
    link: '/'
  }, {
    svg: `
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg>
            `,
    name: 'Docs',
    link: '/'
  }, ],
  customFooter: `<div style="color: var(--assist-color);">Theme source code <a href="//github.com/ZeerBeer/cnblogs-theme-next-muse">here</a></div>
    <div style="color: var(--assist-color);">Website powered by <a href="   //www.cnblogs.com/">here</a></div>`
}
```

### 页面定制 CSS 代码 🎀

[CSS 文件](//blog-static.cnblogs.com/files/zeerbeer/custom.css)需要你自己将文件放入博客园的设置项, 你可以在 [设置](//i.cnblogs.com/settings) 中找到 **页面定制 CSS 代码**.


### 页首 HTML 代码 

```html
<body data-spy="scroll" data-target="#post-nav" data-offset="10">
  <nav id="post-nav" style="width: 0px;">
    <nav id="i-nav" class="nav"> </nav>
  </nav>
</body>
<div id="toTop" class="back-to-top back-to-top-on" onclick="window.scrollTo({top: 0,behavior: 'smooth'})"></div>
<div id="toggle" class="sidebar-toggle"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-left"
    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
    <path fill-rule="evenodd"
      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
  </svg>
</div>
```

页首 HTML 代码包括了 3 个小组件, 它们相互作用可以实现目录结构, 回到顶部这些实用小功能.


### 页脚 HTML 代码 

```html
<script>
  const themeConfig = {...}
</script>
<script src="//files.cnblogs.com/files/zeerbeer/cnblogs-next-muse-no-config.js"></script>
```

页脚 HTML 代码配置像这样, 你需要使用刚刚准备好的配置项, 还需要一个打包好的 `cnblogs-next-muse-no-config.js` 博客园主题文件, 这个文件比较大, 为了更友好的用户体验, 请务必将这些代码放文件内引入, 你可以直接使用我提供的 [//files.cnblogs.com/files/zeerbeer/cnblogs-next-muse-no-config.js](//files.cnblogs.com/files/zeerbeer/cnblogs-next-muse-no-config.js) 不用担心, 这个是长期支持版本, 他将长期存在.

你也可以复制到你的文件中或者下载下来源码进行个性化打包.

至此, 可以刷新使用这个主题.

### 随笔要求

加入了新特性, 这些新特性建立在一个不成文的体系上的.  

对于任何一篇需要预加载的文章来说, 你需要遵守下面的事项

```markdown
<div id="sop"></div> 

## 标题

> 一段内容

- 列表项
- 列表项

<div id="mop"></div> 

预加载从这里截断

<div id="eop"></div> 
```

更多的 markdown 渲染, 可以 [参见这里](//www.cnblogs.com/zeerbeer/p/markdown.html)

## 🎹 配置项说明

### env

> env : string

取值: ['prod', 'debug']

说明: prod 用于线上模式, 友好的对用户 | debug 用于开发模式, 友好的对开发人员

### mode

> mode: string

取值: ['mix', 'summary', 'preload']

说明: mix 混合模式, 他将预加载页面, 将有反馈的页面进行处理, 没有反馈以摘要模式显示 | summary 摘要模式, 他不启用预加载引擎, 因此可能会有小浮动性能的提示 | preload 预加载模式, 他将预加载页面, 仅仅对有反馈的页面进行处理

### menu

> menu: Array | item: Object{svg: string, name: string, link: string}

说明: menu 是导航栏的元素组, 每个元素是一个对象. 对象中 svg 的取值可以在 [图标](https://icons.bootcss.com/) 中找到. 对象中 name 的取值为自定义. 对象中 link 的取值为自定义.

示例: 

```javascript
menu: [{
  svg: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/></svg>`,
  name: 'github',
  link: '//github.com/ZeerBeer/'
}]
```

### customFooter

> customFooter: string

说明: customFooter 是自定义的页面底部, 它支持 html 代码.

示例: 

```javascript
customFooter: `<div>Theme: <a href="//github.com/ZeerBeer/cnblogs-theme-next-muse">cnblogs-theme-next-muse</a></div>`
```

## 👩‍💻 二次开发

如果你对项目感兴趣想要贡献力量或者需要自定义自己专属博客你需要下载开发版. 

### 第一次 🧪

当然你需要提前安装 `git` `nodejs` `npm`.

```bash
git clone https://github.com/ZeerBeer/cnblogs-theme-next-muse.git
cd ./cnblogs-theme-next-muse
npm i
npm run build
```

### 目录结构

目录结构类似如下, 通过路由和组件对博客园主题开发抽象, 旨在帮助开发者更好理解代码.

```
|-src
  |-main.js    # webpack 打包入口文件
  |-dist       # 打包生成目录
  |-global     # 全局
    |-common.css # 全局 css
    |-common.js  # 全局 js
    |-utils.js   # 工具类 
  |-widgets    # 组件
    |-blogTitle  # 标题
    |-catalogue  # 目录
    |-pager      # 分页
      |-pager.js   # 分页 css
      |-pager.css  # 分页 js
```

### More 更多

- 人在国外
- 刚下飞机
- 精力有限
- 赏杯咖啡
