import {
    loadResources
} from '../../global/utils'

export function live2D() {
    if (themeConfig.live2D.load) {
        let host = themeConfig.live2D.live2d_path
        let unloadedResourceCount = 3;
        let callback = (() => {
            return () => {
                if (!--unloadedResourceCount) {
                    initWidget({
                        waifuPath: themeConfig.live2D.waifuPath,
                        cdnPath: themeConfig.live2D.cdn
                    });
                }
            };
        })(unloadedResourceCount);
        loadResources(
            'link',
            host + 'waifu.css',
            callback
        )
        loadResources(
            'script',
            host + 'live2d.min.js',
            callback
        )
        loadResources(
            'script',
            host + 'waifu-tips.js',
            callback
        )
    }
}