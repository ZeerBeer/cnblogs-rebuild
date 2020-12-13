export function blog_comments_placeholder() {

    const interval = setInterval(_ => {

        const comments = document.querySelector("#blog-comments-placeholder")

        if (comments) {
            if (comments.querySelector(".feedback_area_title")) {


                document.querySelector("#tip_comment2").nextElementSibling.innerHTML = ``



                comments.querySelectorAll(".feedbackItem").forEach(comment => {

                    comment.querySelector(".comment_vote").innerHTML = ``

                    // console.log(comment)
                    const feedbackListSubtitle = comment.querySelector(".feedbackListSubtitle")
                    const comment_date = feedbackListSubtitle.querySelector(".comment_date")

                    const date = comment_date.innerHTML
                    const id = comment_date.nextElementSibling.innerHTML
                    const idUrl = comment_date.nextElementSibling.getAttribute("href")
                    const layer = comment.querySelector(".layer").innerHTML
                    const layerPos = comment.querySelector(".layer").getAttribute("href")
                    const avatar = comment.querySelector(".comment_vote")?.nextElementSibling.innerHTML

                    const op = comment.querySelector(".feedbackManage").innerHTML

                    feedbackListSubtitle.innerHTML = `
                        <img class="avatar" src="${avatar}"/>
                        <div style="width: 100%">
                            <a href="${idUrl}">${id}</a>
                            <div style="
                            display: flex;
                            flex-direction: row;
                            color: #b3b3b3;
                            font-size: .75em;
                            ">
                                <div style="padding-right: .5em; padding-bottom: .2em; padding-top: .2em">${date}</div>
                                <div style="padding: .2em .5em;" href="${layerPos}">${layer}</div>
                                ${op}
                            </div>
                        </div>
                    `


                    console.log(date, id, avatar, layer)
                })

                clearInterval(interval)

            } else {
                console.warn("#blog_comments_placeholder", "404")
            }
        } else {
            console.warn("#blog_comments_placeholder", "404")
        }

    }, 500)
}