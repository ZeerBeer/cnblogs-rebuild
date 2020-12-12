import {
    querySelectorShow,
    log,
} from '../../global/utils'

export function comment_form() {
    querySelectorShow('#comment_form', 1250)

    const intval = setInterval(() => {
        if (document.querySelector('#comment_form .login_tips') || document.querySelector('#comment_form .commentbox_main')) {
            if (document.querySelector('#comment_form .login_tips')) {
                // valine 计划取消 如果你不担心滥用的话 可以解锁这段代码
                // let host = '//cdn.bootcdn.net';
                // let unloadedResourceCount = 1;
                // let callback = (() => {
                //     return () => {
                //         if (!--unloadedResourceCount) {
                //             new Valine({
                //                 el: '#comment_form_container',
                //                 appId: '',
                //                 appKey: ''
                //             })
                //         }
                //     };
                // })(unloadedResourceCount);
                // loadResources(
                //     'script',
                //     host + '/ajax/libs/valine/1.4.4/Valine.min.js',
                //     callback
                // )
            } else {
                // console.log(document.querySelector('#comment_form .commentbox_main'));
            }
            clearInterval(intval)
        }
        console.warn('#comment_form.', '404');
    }, 500)


    const lzIntval = setInterval(() => {
        if (document.querySelector('.louzhu')) {
            document.querySelectorAll('.louzhu').forEach(e => {
                e.nextSibling ? e.nextSibling.data = '' : log('404')
                e.previousSibling ? e.previousSibling.data = '' : log('404')
            })

            clearInterval(lzIntval)
        }
    }, 500)
}