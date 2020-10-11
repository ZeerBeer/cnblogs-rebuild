export function catalogue() {
    var listHtml = "";
    var h2Item;
    document.querySelectorAll('#cnblogs_post_body h2, h3').forEach(function (_) {
        if (_.tagName == 'H2') {
            var $a = document.createElement('a');
            $a.setAttribute('class', 'nav-link');
            $a.setAttribute('href', '#' + _.getAttribute('id'));
            $a.innerHTML = _.innerHTML;

            if (h2Item) {
                document.querySelectorAll('#i-nav').forEach(function (_) {
                    _.appendChild(h2Item);
                });
            }

            document.querySelectorAll('#i-nav').forEach(function (_) {
                _.appendChild($a);
            });
            h2Item = document.createElement('nav');
            h2Item.setAttribute('class', 'nav');
            h2Item.style.display = 'none';
        } else if (_.tagName == 'H3') {
            var _$a = document.createElement('a');

            _$a.setAttribute('class', 'nav-link');

            _$a.setAttribute('href', '#' + _.getAttribute('id'));

            _$a.innerHTML = _.innerHTML;
            h2Item.appendChild(_$a);
        }
    });
    if (h2Item) {
        document.querySelectorAll('#i-nav').forEach(function (_) {
            _.appendChild(h2Item);
        });
    }
    document.querySelectorAll('#i-nav > a').forEach(function (e) {
        new MutationObserver(function (list) {
            list.forEach(function (item) {
                if (item.target.getAttribute('class').indexOf('active') != -1) {
                    document.querySelectorAll('#i-nav .nav').forEach(function (e) {
                        e.style.display = 'none';
                    });
                    item.target.nextSibling.style.display = 'flex';
                } else {
                    item.target.nextSibling.style.display = 'none';
                }
            });
        }).observe(e, {
            attributes: true,
            childList: false,
            subtree: false
        });
    });
}
