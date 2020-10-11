const themeConfig = {
    /**
     * env 取值 ['debug', 'prod'] 放心 debug 模式下控制台会打印很多信息
    */
    env: 'prod',
    /**
     * mode 取值 ['mix', 'summary', 'preload']
    */
    mode: 'mix',
    /**
     * api 是博客园给开发者调用专门的接口 (因为有跨域问题, 这种模式已经被弃用
    */
    // api: {
    //     host: '填入反代服务器地址',
    //     clientId: '填入client-id',
    //     clientSecret: '填入client-secret',
    //     grantType: 'client_credentials',
    // },
    /**
     * 首部的菜单接口 目前预留 基本功能还未实现 采用 file + [tag, arc]
    */
    menu: [
        {
            svg: `
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            `,
            name: 'Home',
            link: '/'
        }, {
            svg: `
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg>
            `,
            name: 'Docs',
            link: '/'
        },
    ],
    customFooter: `<div style="color: var(--assist-color);">Theme source code <a href="//github.com/ZeerBeer/cnblogs-theme-next-muse">here</a></div>
    <div style="color: var(--assist-color);">Website powered by <a href="   //www.cnblogs.com/">here</a></div>`
}