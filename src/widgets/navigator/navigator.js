import {
    querySelectorShow,
    log
} from '../../global/utils'

export function navigator() {

    document.querySelector('#navList') ? document.querySelector('#navList').innerHTML = '' : log('#navList', '404')

    themeConfig.menu.forEach(e0 => {
        document.querySelector('#navList') ? document.querySelector('#navList').innerHTML += `<li><a href="${e0.link}">${e0.svg + e0.name}</a></li>` : log('#navList', '404')
    })

    querySelectorShow('#navList', 500)
}