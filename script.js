document.addEventListener("DOMContentLoaded", function () {
    const navbtns = document.querySelector("nav").querySelector("div").querySelectorAll("a")
    const sections = document.querySelector("div#pages").querySelectorAll("section")
    let shownav = true
    document.getElementById("home-btn").style.color = "grey"

    document.getElementById("hide-show").addEventListener("click", function () {
        if (shownav == true) {
            shownav = false
            document.querySelector("nav").querySelector("div").style.display = "none"
            document.querySelector("nav").style.width = "1vw"
            document.getElementById("pages").style.width = "90vw"
            document.getElementById("hide-show").innerText = ">"
        } else {
            shownav = true
            document.querySelector("nav").querySelector("div").style.display = "block"
            document.querySelector("nav").style.width = "10vw"
            document.getElementById("pages").style.width = "80vw"
            document.getElementById("hide-show").innerText = "<"
        }
    })

    function load(id) {
        const pageid = id.slice(0, -4)
        sections.forEach(page => {
            page.style.display = "none"
        })
        navbtns.forEach(btn => {
            btn.removeAttribute("style")
        })
        document.getElementById(id).style.color = "grey"
        document.getElementById(pageid).style.display = "inline-block"
    }

    navbtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const id = btn.id
            load(id)
        })
    })
})