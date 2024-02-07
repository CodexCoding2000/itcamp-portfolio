const navbar = document.querySelector(".navbar");
const scrollToTop = document.querySelector(".scroll-to-top");

scrolltotop = () => {
    window.scrollTo(0,0);
}

window.addEventListener("DOMContentLoaded", () => {
    const navs = document.querySelectorAll("[goto]");
    window.addEventListener("scroll", e => {
        if (window.scrollY > 70) {
            navbar.classList.add("scroll");
        } else if (window.scrollY <= 20) {
            navbar.classList.remove("scroll");
        }
    
        if (window.scrollY > 140) {
            scrollToTop.classList.add("show");
        } else if (window.scrollY <= 70) {
            scrollToTop.classList.remove("show");
        }
    });

    navs.forEach(element => {
        element.addEventListener("click", e => {
            const attr = element.getAttribute("goto");
            
            if (attr == "top") {
                scrolltotop();
            } else {
                const node = document.getElementById(attr);

                if (node) {
                    node.scrollIntoView({
                        block: "center",
                        inline: "center"
                    })
                }
            }
        })
    });
})