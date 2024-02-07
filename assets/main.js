const navbar = document.querySelector(".navbar");
const scrollToTop = document.querySelector(".scroll-to-top");
const Wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const ports = [
    {
        img: "img/port/life_homescreen.png",
        title: "Life Roleplay Homescreen System",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้คือ ศูนย์รวมเมนูเพื่อเข้าถึงระบบต่างๆ ภายในเซิฟเวอร์ ซึ่งก็จะรวมทุกอย่างไว้ในระบบเดียว เป็นระบบที่ผมทำนานที่สุดเนื่องจากว่า ต้องวาง flow การทำงานของระบบให้ดี และ การออกแบบฐานข้อมูลเพื่อจัดเก็บข้อมูลต่างๆ เพื่อที่จะได้ไม่มีปัญหาในอนาคต โดยข้อมูลที่มี ถือว่าเยอะสำหรับผมมาก 1000++ เพื่อที่จะทำให้ตัว ระบบไม่แล็คผมจึงต้องใช้ package นึงชื่อว่า react-window ซึ่ง package นี้จะช่วยให้ตัวระบบแสดงผลแค่ส่วนที่มองเห็นเท่านั้นจะไม่แสดงข้อมูลที่ไม่จำเป็น โดยระบบตัวนี้ผมเป็นคนออกแบบเองทั้งหมด`,
        tags: "FiveM, Game"
    },
    {
        img: "img/port/life_inventory.png",
        title: "Life Roleplay Inventory System",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้คือ ระบบกระเป๋าเป็น ระบบที่จัดการเกี่ยวกับ Items ต่างๆ ของผู้เล่น โดยมีการบอกระดับของ Items ชิ้นนั้นๆ และระบบตัวนี้ผมเป็นคนออกแบบเองทั้งหมด`,
        tags: "FiveM, Game"
    },
    {
        img: "img/port/life_phone.png",
        title: "Life Roleplay Phone System",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้เป็นอีกระบบที่ทำยากพอสมควรเนื่องจากเป็นระบบที่ต้องทำการสร้างให้เสมือนเป็น OS นึง และยังมีแอพต่างๆที่อยู่ในระบบอีก โดยระบบตัวนี้ผมเป็นคนออกแบบเองทั้งหมด`,
        tags: "FiveM, Game"
    },
    {
        img: "img/port/olympia_carhud.png",
        title: "Olympia Carhud System",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้เป็นระบบแสดงความเร็ว สถานะ ต่างๆ ของยานพาหนะ โดยระบบตัวนี้ผมเป็นคนออกแบบเองทั้งหมด`,
        tags: "FiveM, Game"
    },
    {
        img: "img/port/olympia_register.png",
        title: "Olympia Register Menu",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้หน้าต่างสร้างตัวละครก่อนที่จะเข้าไปเล่นในเซิฟเวอร์ โดยระบบตัวนี้ผมเป็นคนออกแบบเองทั้งหมด`,
        tags: "FiveM, Game"
    },
    {
        img: "img/port/order_management.png",
        title: "Mini POS System",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้เป็นระบบการจัดการคำสั่งซื้อกล่องทุเรียนสดที่จะรวมรายได้ของพนักงานจัดส่งไว้แต่ละรอบโดยเมื่อพนักงานไปส่งให้ลูกค้าก็จำเป็นต้องเปิด เว็บตัวนี้ขึ้นมาเพื่อรับชำระเงิน โดยจะสามารถชำระเงินได้ทั้ง เงินสด และ พร้อมเพย์ เมื่อลูกค้าทำการจ่ายเงินเสร็จแล้วพนักงานจัดส่งต้องกดยืนยันในระบบเพื่อจัดเก็บคำสั่งซื้อไว้เป็นคำสั่งซื้อที่จ่ายเงินแล้ว โดยระบบตัวนี้ผมเป็นคนออกแบบเองทั้งหมด`,
        tags: "Web Application"
    },
    {
        img: "img/port/puzzle_economy.png",
        title: "Puzzle City Economy System",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้การขาย Items ในเซิฟเวอร์แล้วแลกมาเป็นสกุลเงินในประเทศ ระบบตัวนี้เป็นช่วงที่ผมได้เข้าไปทำงานในบริษัทเป็นครั้งแรก เป็นประสบการณ์ที่ดีอย่างมากสำหรับผม`,
        tags: "FiveM, Game"
    },
    {
        img: "img/port/puzzle_inventory.png",
        title: "Puzzle City Inventory System",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบนี้เป็นระบบ ระบบกระเป๋าเป็น ระบบที่จัดการเกี่ยวกับ Items ต่างๆ ของผู้เล่นระบบตัวนี้เป็นช่วงที่ผมได้เข้าไปทำงานในบริษัทเป็นครั้งแรก เป็นประสบการณ์ที่ดีอย่างมากสำหรับผม`,
        tags: "FiveM, Game"
    },
]

scrolltotop = () => {
    window.scrollTo(0, 0);
}

gopage = page => {
    if (page == "top") {
        scrolltotop();
    } else {
        const node = document.getElementById(page);

        if (node) {
            node.scrollIntoView({
                block: "start",
                inline: "start"
            })
        }
    }
}

addAnimation = (element, nextAnimation = "", cb) => {
    element.classList.add(nextAnimation);
    element.addEventListener("animationend", () => {
        if (cb) {
            element.classList.remove(nextAnimation);
            element.addEventListener("animationend", () => {
                if (cb) {
                    cb();
                }
            }, false);
        }
    }, false);
}
function setMode(viewMode = localStorage.getItem('viewMode'), elements) {
    elements.forEach(el => {
        el.check = (viewMode && viewMode === 'dark')
    })
    localStorage.setItem("viewMode", viewMode)
    if (viewMode && viewMode === 'dark') {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("[goto]");
    const darkmodeToggle = document.querySelectorAll("#darkmodecontrol");
    
    if (darkmodeToggle) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            setMode(newColorScheme, darkmodeToggle)
        });        
    
        darkmodeToggle.forEach(el => el.addEventListener("change", e => {
            setMode(e.target.checked ? "dark" : "light", darkmodeToggle)
        }));
    }

    (async () => {
        document.querySelector("#work-list").innerHTML = "";

        for (const key in ports) {
            if (Object.hasOwnProperty.call(ports, key)) {
                const port = ports[key];

                document.querySelector("#work-list").innerHTML += `<div class="card" onclick="previewImage('port.img')"><div class="card-img"><img src="${port.img}" alt=""></div><div class="card-info"><div class="card-title">${port.title}</div><div class="card-tags">Tags:&nbsp;${port.tags.split(", ").map(t => `<span class="badge ${t.toLowerCase()}">${t}</span>`).join(",")}</div><div class="card-description">${port.description}</div></div></div>`;
            }
        }
        await Wait(1000);
        addAnimation(document.querySelector("body"), "loaded");
        scrolltotop();
    })()

    window.addEventListener("scroll", e => {
        const top = window.scrollY;

        if (top > 70) {
            navbar.classList.add("scroll");
        } else if (top < 20) {
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
            const page = sec.getAttribute("id");

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

            gopage(attr);
        })
    });
})