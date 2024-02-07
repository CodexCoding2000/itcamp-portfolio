const navbar = document.querySelector(".navbar");
const scrollToTop = document.querySelector(".scroll-to-top");

scrolltotop = () => {
    window.scrollTo(0,0);
}

window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("[goto]");

    window.addEventListener("scroll", e => {
        const top = window.scrollY;

        if (top > 70) {
            navbar.classList.add("scroll");
        } else if (top <= 20) {
            navbar.classList.remove("scroll");
        }
    
        if (top > 140) {
            scrollToTop.classList.add("show");
        } else if (top <= 70) {
            scrollToTop.classList.remove("show");
        }

        sections.forEach(sec => {
            const offset = sec.offsetTop - 250;
            const height = sec.offsetHeight;
            const page   = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove("active");
                })

                const node = document.querySelectorAll(`[goto="${page === "home" ? "top" : page}"]`);

                if (node) {
                    node.forEach(elem => elem.classList.add("active"));
                }
            }
        })
    });

    document.querySelector(".navbar-toggle").addEventListener("click", e => {
        document.querySelector(".navbar").classList.toggle("show");
    })

    navLinks.forEach(element => {
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