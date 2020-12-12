import {
    querySelectorShow
} from '../../global/utils'

export function topic() {
    querySelectorShow('#post_detail .postTitle', 750)
    querySelectorShow('#post_detail .postDesc', 1000)
    querySelectorShow('#post_detail .postBody', 1000)
    document.querySelectorAll('#cnblogs_post_body pre code').forEach(e => {
        const promt = document.createElement("span")
        promt.classList.add('lang')
        promt.innerHTML = `<span>${e.classList[0]?.split('-')[1] ?? 'text'}</span>`
        e.parentNode.insertBefore(promt, e)
    })
}