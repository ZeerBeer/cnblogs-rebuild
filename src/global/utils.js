export function querySelectorShow(selectorString, delay) {
    setTimeout(function (_) {
        document.querySelector(selectorString) ? document.querySelector(selectorString).style.opacity = 1 : log(selectorString, '404');
        document.querySelector(selectorString) ? document.querySelector(selectorString).style.top = 0 : log(selectorString, '404');
    }, delay);
}

export function querySelectorAllShow(selectorString, delay) {
    document.querySelectorAll(selectorString).forEach(function (e) {
        setTimeout(function (_) {
            e.style.opacity = 1;
            e.style.top = 0;
        }, delay);
    });
}

export function log(...params) {
    if (themeConfig.env == 'debug')
        console.warn(...params)
}

export function loadResources(type, src, callback) {
    let script = document.createElement(type);
    let loaded = false;
    if (typeof callback === 'function') {
        script.onload = script.onreadystatechange = () => {
            if (!loaded && (!script.readyState || /loaded|complete/.test(script.readyState))) {
                script.onload = script.onreadystatechange = null;
                loaded = true;
                callback();
            }
        }
    }
    if (type === 'link') {
        script.href = src;
        script.rel = 'stylesheet';
    } else {
        script.src = src;
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}