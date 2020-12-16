/**
 * 降低耦合 依赖导入
 */
// 配置文件 

// 全局
import bootstrap from 'bootstrap/dist/js/bootstrap.min'
import {
    $homeResponsive
} from './global/common'
import './global/common.css'
// #blogTitle
import {
    blogTitle
} from './widgets/blogTitle/blogTitle'
import './widgets/blogTitle/blogTitle.css'
// #blogTitle
import {
    navigator
} from './widgets/navigator/navigator'
import './widgets/navigator/navigator.css'
// 首页 #mainContent 渲染
import {
    mainContent
} from './widgets/mainContent/mainContent'
import './widgets/mainContent/mainContent.css'
// .pager 分页器 
import {
    pager
} from './widgets/pager/pager'
import './widgets/pager/pager.css'
// #footer 自定义底部 
import {
    footer
} from './widgets/footer/footer'
import './widgets/footer/footer.css'
// #toTop
import {
    toTop
} from './widgets/toTop/toTop'
import './widgets/toTop/toTop.css'
// #toggle
import {
    toggle
} from './widgets/toggle/toggle'
import './widgets/toggle/toggle.css'
// #toggle
import {
    catalogue
} from './widgets/catalogue/catalogue'
import './widgets/catalogue/catalogue.css'
// #topic
import {
    topic
} from './widgets/topic/topic'
import './widgets/topic/topic.css'
// #comment_form
import {
    comment_form
} from './widgets/comment_form/comment_form'
import './widgets/comment_form/comment_form.css'
// #dplayer
import {
    dplayer
} from './widgets/dplayer/dplayer'
import './widgets/dplayer/dplayer.css'
// #tag
import {
    EntryTag
} from './widgets/EntryTag/EntryTag'
import './widgets/EntryTag/EntryTag.css'
// hljs 
import './widgets/hljs/hljs.css'
// blog_comments_placeholder
import {
    blog_comments_placeholder
} from './widgets/blog_comments_placeholder/blog_comments_placeholder'
import './widgets/blog_comments_placeholder/blog_comments_placeholder.css'
/**
 * 响应式
 */
$homeResponsive()
/**
 * 根据地址栏变化设计的 Router 路由处理 
 */
// 获取路由 
const cnblogsRouter = window.location.pathname.split('/').filter(function (e) {
    return e && e.trim()
});
// 路由处理 若 //www.cnblogs.com/zeerbeer/:module/:page  {module} 不存在则转发 index 处理 
// 这个是函数处理的入口 

switch (cnblogsRouter[1] ?? 'default.html') {
    case 'protected':
    case 'p':
        console.log('cnblogsRouter', 'p')
        blogTitle()
        navigator()
        toggle()
        catalogue()
        topic()
        dplayer()
        EntryTag()
        comment_form()
        footer()
        // 临时方案 
        $("#blog-comments-placeholder").bind('DOMNodeInserted', _ => {
            if (comments_interval != null) {
                clearTimeout(comments_interval)
            }
            comments_interval = setTimeout(function () {
                blog_comments_placeholder()
            }, 1000)
        })
        break

    case 'default.html':
        console.log('cnblogsRouter', 'index')
        blogTitle()
        navigator()
        mainContent()
        pager()
        footer()
        break

    default:
        console.warn('cnblogsRouter', cnblogsRouter[1], 'no handle function')
        blogTitle()
        navigator()
        // 这里可以加 404 
        footer()
        break
}

var comments_interval = null

window.onscroll = $_$ => {
    toTop()
}