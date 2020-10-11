import { log } from './utils'

export function $homeResponsive() {
    document.querySelector('#home') ? document.querySelector('#home').setAttribute('class', 'container-md') : log('#home', '404')
}