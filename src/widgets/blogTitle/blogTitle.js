import {
    querySelectorShow
} from '../../global/utils'

export function blogTitle() {
    // 显示 大标题
    querySelectorShow('#Header1_HeaderTitle', 1)
    // 显示 副标题
    querySelectorShow('#blogTitle h2', 250)
}