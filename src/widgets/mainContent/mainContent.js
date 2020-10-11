import {
    querySelectorAllShow
} from '../../global/utils'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import axios from 'axios'

hljs.registerLanguage('javascript', javascript);

export function mainContent() {
    document.querySelectorAll('.postTitle2 span span').forEach(e => {
        e.innerHTML = '📌'
    })

    document.querySelectorAll('#mainContent .forFlow .day').forEach(function (e) {
        e.innerHTML += "<div class=\"postSeparator\"></div>";
    });

    // 删除摘要 两个字
    if (themeConfig.mode === 'mix' || themeConfig.mode === 'summary') document.querySelectorAll('#mainContent .forFlow .day .postCon .c_b_p_desc').forEach(function (e) {
        e.innerHTML = e.innerHTML.substr(4, e.innerHTML.length);
    });

    var separator = document.querySelectorAll('#mainContent .forFlow .day .postSeparator');
    separator ? separator[separator.length - 1].style.display = 'none' : console.error('#mainContent .forFlow .day .postSeparator', '404');

    graphicalDesc()
    dateSlide()
    if (themeConfig.mode == 'mix')
        preloading()
}

function preloading() {
    // preloading core
    document.querySelectorAll('#mainContent .forFlow .day .postTitle .postTitle2').forEach(function (e) {
        Promise.all([axios.get(e.getAttribute('href'), {}), new Promise(function (s, e) {
            setTimeout(function (_) {
                s('ok');
            }, 750);
        })]).then(function (_) {
            _[0].data = _[0].data.slice(0, _[0].data.indexOf('<div id="MySignature"></div>'));

            // 优化建议 (下个版本使用 Dom 解析替换)
            if (_[0].data.indexOf('<div id="sop"></div>') != -1) {
                e.parentNode.nextElementSibling.innerHTML = _[0].data.slice(_[0].data.indexOf('<div id="sop"></div>') + '<div id="sop"></div>'.length, _[0].data.indexOf('<div id="mop"></div>'));
                e.parentNode.nextElementSibling.innerHTML += `<a href=" ${e.getAttribute('href')}" class="c_b_p_desc_readmore btn btn-outline-dark">${'阅读全文'}</a>`;
            }

            e.parentNode.style.opacity = '1';
            e.parentNode.style.top = '0';
            document.querySelectorAll('pre code').forEach(function (block) {
                console.log(1);
                hljs.highlightBlock(block)
            });
            querySelectorAllShow('#mainContent .forFlow .day .postCon', 250)
            querySelectorAllShow('#mainContent .forFlow .day .postDesc', 500)
            querySelectorAllShow('#mainContent .forFlow .day .postSeparator', 750)
        });
    });
}

function dateSlide() {
    document.querySelectorAll('#mainContent .forFlow .dayTitle').forEach(function (e) {
        e.firstElementChild.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar4-week" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/><path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/></svg> Posted on ` + e.firstElementChild.innerHTML // e.nextElementSibling.innerHTML += e.innerHTML // 博客园的坑 同时间发表只显示一次

        e.parentNode.querySelectorAll('.postTitle').forEach(function (e0) {
            e0.innerHTML += e.innerHTML;
        })
        e.innerHTML = ''
    });
}

function graphicalDesc() {
    document.querySelectorAll('#mainContent .forFlow .day .postDesc').forEach(function (e) {
        e.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>` + e.innerHTML.slice(26, e.innerHTML.length);
    });
    document.querySelectorAll('#mainContent .forFlow .day .postDesc .post-view-count').forEach(function (e) {
        e.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>` + e.innerHTML.slice(2, e.innerHTML.length);
    });
    document.querySelectorAll('#mainContent .forFlow .day .postDesc .post-comment-count').forEach(function (e) {
        e.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-square-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>` + e.innerHTML.slice(2, e.innerHTML.length);
    });
    document.querySelectorAll('#mainContent .forFlow .day .postDesc .post-digg-count').forEach(function (e) {
        e.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>` + e.innerHTML.slice(2, e.innerHTML.length);
    });
    document.querySelectorAll('#mainContent .forFlow .day .postDesc a').forEach(function (e) {
        e.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>` + e.innerHTML;
    });
}