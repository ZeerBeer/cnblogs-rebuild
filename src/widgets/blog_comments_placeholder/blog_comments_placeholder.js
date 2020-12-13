export function blog_comments_placeholder() {

    const interval = setInterval(_ => {

        const comments = document.querySelector("#blog-comments-placeholder")

        if (comments) {
            if (comments.querySelector(".feedback_area_title")) {


                document.querySelector("#tip_comment2").nextElementSibling.innerHTML = ``


                comments.querySelectorAll(".feedbackItem").forEach(comment => {
                    // console.log(comment)
                    const feedbackListSubtitle = comment.querySelector(".feedbackListSubtitle")
                    const comment_date = feedbackListSubtitle.querySelector(".comment_date")

                    const date = comment_date.innerHTML
                    const id = comment_date.nextElementSibling.innerHTML
                    const layer = comment.querySelector(".layer").innerHTML
                    const avatar = comment.querySelector(".comment_vote")?.nextElementSibling.innerHTML


                    feedbackListSubtitle.innerHTML = `
                        <img class="avatar" src="${avatar}"/>
                        <div>
                            <div>${id}</div>
                            <div style="display: flex; flex-direction: row">
                                <div>${date}</div>
                                <div>${layer}</div>
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