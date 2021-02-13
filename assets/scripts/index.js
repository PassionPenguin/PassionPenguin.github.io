window.$ = (selector) => {
    return document.querySelectorAll(selector);
}

window.ce = ({name, classList, id, innerHTML, attrs, onclick}) => {
    let e = document.createElement(name)
    if (classList != null)
        e.classList = classList;
    if (id != null)
        e.id = id;
    if (innerHTML != null)
        e.innerHTML = innerHTML;
    if (attrs != null)
        attrs.forEach(attr => {
            e.setAttribute(attr[0], attr[1]);
        });
    e.addEventListener("click", onclick);
    return e;
}

HTMLAllCollection.forEach = Array.prototype.forEach;

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function openUrl(url) {
    window.open(url);
}

function toggleDarkMode() {
    if (document.documentElement.hasAttribute("dark")) {
        document.documentElement.removeAttribute("dark");
        document.documentElement.setAttribute("light", "");
        setCookie("darkmode", "0", "60");
    } else {
        document.documentElement.setAttribute("dark", "");
        document.documentElement.removeAttribute("light");
        setCookie("darkmode", "1", "60");
    }
}

function init() {
    /*
    <a href="./" class="title">霜羽 Hoarfroster</a>
    <span class="mode"></span>
    <span class="github"></span>
    <span class="bilibili"></span>
    <span class="zhihu"></span>
    <span class="juejin"></span>
     */

    if (getCookie("darkmode") === "1") document.documentElement.setAttribute("dark", "");
    if (getCookie("darkmode") === "0") document.documentElement.setAttribute("light", "");
    if (getCookie("darkmode") === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute("dark", "");
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (getCookie("darkmode") === null)
            if (e.matches) {
                document.documentElement.setAttribute("dark", "");
            } else {
                document.documentElement.removeAttribute("dark");
                document.documentElement.setAttribute("light", "");
            }
    });

    const container = ce({name: "div", classList: ["header"]})
    container.appendChild(ce({name: "a", attrs: [["href", "/"]], classList: ["title"], innerHTML: "霜羽 Hoarfroster"}))
    container.appendChild(ce({
        name: "span", classList: ["mode"], onclick: () => {
            toggleDarkMode()
        }
    }))
    container.appendChild(ce({
        name: "span", classList: ["github"], onclick: () => {
            openUrl("https://github.com/PassionPenguin")
        }
    }))
    container.appendChild(ce({
        name: "span", classList: ["bilibili"], onclick: () => {
            openUrl("https://space.bilibili.com/201469972")
        }
    }))
    container.appendChild(ce({
        name: "span", classList: ["zhihu"], onclick: () => {
            openUrl("https://www.zhihu.com/people/shuang-yu-29-75")
        }
    }))
    container.appendChild(ce({
        name: "span", classList: ["juejin"], onclick: () => {
            openUrl("https://juejin.cn/user/474638410324526")
        }
    }))

    document.body.appendChild(container);
}
