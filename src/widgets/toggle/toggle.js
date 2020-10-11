export function toggle() {
    document.querySelector('#toggle').style.display = 'flex'
    document.querySelector('#toggle').addEventListener("click", () => {
        document.querySelectorAll('#post-nav').forEach(e => {
            if (e.style.width === '0px') {
                e.style.width = '20rem'
                document.querySelectorAll('body').forEach(e => {
                    e.style.paddingRight = '20rem'
                })
            } else {
                e.style.width = '0px'

                document.querySelectorAll('body').forEach(e => {
                    e.style.paddingRight = '0px'
                })
            }
        })
    })
}