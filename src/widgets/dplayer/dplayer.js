import {
    loadResources,
} from '../../global/utils'

export function dplayer() {
    console.log(document.querySelector('#dplayer-v'));
    if (document.querySelector('#dplayer-v')) {
        let host = '//cdn.bootcdn.net';
        let unloadedResourceCount = 1;
        let callback = (() => {
            return () => {
                if (!--unloadedResourceCount) {
                    const dp = new DPlayer({
                        container: document.querySelector('#dplayer-v'),
                        screenshot: true,
                        video: {
                            url: document.querySelector('#dplayer-v').getAttribute('src'),
                        },
                    });
                }
            };
        })(unloadedResourceCount);
        loadResources(
            'script',
            host + '/ajax/libs/dplayer/1.26.0/DPlayer.min.js',
            callback
        )
    }
}