export function pager() {
    var _document$querySelect, _document$querySelect2;

    // 万恶的第一页
    document.querySelector('#nav_next_page a') ? document.querySelector('#nav_next_page a').innerHTML = "\n                    <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrow-bar-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\" d=\"M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z\"/>\n                    </svg>\n                " : console.warn('#nav_next_page a', '404'); // 之后

    document.querySelectorAll('#homepage_bottom_pager .pager a').forEach(function (e) {
        if (e.innerHTML === '上一页') {
            e.innerHTML = "\n                    <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrow-bar-left\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\" d=\"M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z\"/>\n                    </svg>\n                ";
        }

        if (e.innerHTML === '下一页') {
            e.innerHTML = "\n                    <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrow-bar-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\" d=\"M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z\"/>\n                    </svg>\n                ";
        }
    }); // 将当前页小家伙找位置   

    var pagerArr = document.querySelector('#homepage_bottom_pager .pager') ? document.querySelector('#homepage_bottom_pager .pager').childNodes : [];
    var cuePageElement = document.createElement('a');
    var curIndex = 0;
    var curPage = 0;
    var element, nextElement;

    for (var index = 0; index < pagerArr.length; index++) {
        var e = pagerArr[index];

        if (e.nodeType === 3 && e.data.trim() != '') {
            curIndex = index;
            curPage = e.data.trim();
            element = e;
            nextElement = pagerArr[index + 1];
            break;
        }
    }

    (_document$querySelect = document.querySelector('#homepage_bottom_pager .pager')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.removeChild(element);
    cuePageElement.innerHTML = curPage;
    cuePageElement.setAttribute('class', 'active');
    (_document$querySelect2 = document.querySelector('#homepage_bottom_pager .pager')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.insertBefore(cuePageElement, nextElement);
    setTimeout(function () {
        document.querySelector('#homepage_bottom_pager .pager') ? document.querySelector('#homepage_bottom_pager .pager').style.opacity = 1 : console.warn('#homepage_bottom_pager .pager', '404');
        document.querySelector('#homepage_bottom_pager .pager') ? document.querySelector('#homepage_bottom_pager .pager').style.top = 0 : console.warn('#homepage_bottom_pager .pager', '404');
    }, 1000);
    setTimeout(function () {
        document.querySelector('#nav_next_page') ? document.querySelector('#nav_next_page').style.opacity = 1 : console.error('#nav_next_page', '404');
        document.querySelector('#nav_next_page') ? document.querySelector('#nav_next_page').style.top = 0 : console.error('#nav_next_page', '404');
    }, 1000);
}