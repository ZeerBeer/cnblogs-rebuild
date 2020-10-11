import {
    querySelectorShow
} from '../../global/utils'

export function footer() {
    const _footer = 
    `<div style="display: flex;flex-direction: row;align-items: center;color: var(--assist-color);"> © 2014 – 2020 <svg id="h-beat" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>
        ${document.querySelector('#Header1_HeaderTitle') ? document.querySelector('#Header1_HeaderTitle').innerHTML : console.error('#Header1_HeaderTitle', '404')} 
    </div>`

    document.querySelector('#footer') ?
        document.querySelector('#footer').innerHTML = _footer :
        console.error('#footer', '404');
    document.querySelector('#footer') ? document.querySelector('#footer').innerHTML += themeConfig.customFooter : console.error('#footer', '404');
    querySelectorShow('#footer', 1500)
}