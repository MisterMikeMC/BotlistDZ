import { j as p, L as c, u as b, R as L, a as s, r as I, B as S } from "./vendor.4f60ef5f.js";
const k = function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) m(t);
    new MutationObserver(t => {
        for (const i of t)
            if (i.type === "childList")
                for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && m(l)
    }).observe(document, { childList: !0, subtree: !0 });

    function n(t) { const i = {}; return t.integrity && (i.integrity = t.integrity), t.referrerpolicy && (i.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? i.credentials = "include" : t.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i }

    function m(t) {
        if (t.ep) return;
        t.ep = !0;
        const i = n(t);
        fetch(t.href, i)
    }
};
k();
const e = p.exports.jsx,
    r = p.exports.jsxs;

function x() { return e("div", { children: e("section", { className: "HomeBar", children: e("header", { children: r("nav", { children: [r("h1", { className: "Title", children: ["BOTLIST", e("br", {}), "RINCON DE LOS DEVS"] }), r("ul", { className: "ReDirects", children: [e("li", { className: "Link", children: e(c, { className: "Links", to: "/", children: "Home" }) }), e("li", { className: "Link", children: e(c, { className: "Links", to: "/bots", children: "Bots" }) }), e("li", { className: "Link", children: e(c, { className: "Links", to: "/add", children: "Add" }) }), e("li", { className: "Link", children: e(c, { className: "Links", to: "/about", children: "About" }) })] })] }) }) }) }) }
let h = { BotName: "\u{1F338} Komi Shouko \u{1F338}", BotID: "875166925884370994", DevName: "MrMikeMC#9081", ImageBanner: "https://cdn.discordapp.com/attachments/930674284425265182/934614467705192478/standard_1.gif", Prefix: "k!", Description: "Lorem impsum dolor.", ServerSupport: "https://discord.gg/vQR6ZZ63Ap" },
    u = { BotName: "Tanjiro?", BotID: "921860445164421131", DevName: "Akeno#0347", ImageBanner: "https://opengraph.githubassets.com/4a42801c218fa7cc44caf3e6a23a3f44873c63dfe26407506d567161ee763b41/MisterMikeMC/BolistTypeScriptReactWeb", Prefix: "t!", Description: "Lorem impsum dolor.", ServerSupport: "https://discord.gg/vQR6ZZ63Ap" },
    f = { BotName: "D-Drum?", BotID: "  ", DevName: "Akeno#0347", ImageBanner: "https://opengraph.githubassets.com/4a42801c218fa7cc44caf3e6a23a3f44873c63dfe26407506d567161ee763b41/MisterMikeMC/BolistTypeScriptReactWeb", Prefix: "d!", Description: "Lorem impsum dolor.", ServerSupport: "https://discord.gg/vQR6ZZ63Ap" },
    g = { BotName: "Teegan", BotID: "796767810054258719", DevName: "xAtsuUC_#7030", ImageBanner: "https://opengraph.githubassets.com/4a42801c218fa7cc44caf3e6a23a3f44873c63dfe26407506d567161ee763b41/MisterMikeMC/BolistTypeScriptReactWeb", Prefix: "t!", Description: "Lorem impsum dolor.", ServerSupport: "https://discord.gg/vQR6ZZ63Ap" },
    B = { BotName: "Megumin", BotID: "881462025514020874", DevName: "IIPOLOII#4840", ImageBanner: "https://opengraph.githubassets.com/4a42801c218fa7cc44caf3e6a23a3f44873c63dfe26407506d567161ee763b41/MisterMikeMC/BolistTypeScriptReactWeb", Prefix: "m/", Description: "Lorem impsum dolor.", ServerSupport: "https://discord.gg/vQR6ZZ63Ap" },
    M = { BotName: "Vex", BotID: "911631981605957732", DevName: "ThiagoSL#8351", ImageBanner: "https://cdn.discordapp.com/avatars/911631981605957732/6caea746c38c6fba2c807378abd06333.webp?size=1024", Prefix: "!", Description: "Vex, one of the best Bots to manage your Discord server totally free.", ServerSupport: "https://discord.gg/vQR6ZZ63Ap" };
let N = [];
N.push(h, u, f, g, B);

function R() { let o = N.map(a => { let n = `/bots/${a.BotID}`; return e("div", { children: r("div", { className: "card", children: [e("h1", { children: a.BotName }), r("p", { children: ["By ", a.DevName] }), e(c, { className: "IndividualBotPadeLink", to: n, children: "View" })] }) }) }); return e("div", { className: "CardSection", children: o }) }

function d() { return e("h1", { className: "Text", children: "Proximamente..." }) }

function y() {
    function o() { window.open("https://discord.gg/vQR6ZZ63Ap") }
    return r("footer", { className: "Footer", children: [r("div", { className: "Title", children: [r("h1", { className: "Title", children: ["BOTLIST", e("br", {}), "RINCON DE LOS DEVS"] }), e("img", { className: "ImageLogo", src: "https://cdn.discordapp.com/attachments/938076154722680883/949869022835515392/BotlistLogo.png", alt: "Logo Botlist", onClick: o })] }), r("div", { children: [e("h2", { className: "SubTitle", children: "S\xEDguenos en:" }), e("a", { id: "LinkButton", href: "https://discord.gg/vQR6ZZ63Ap", target: "_blank", children: e("i", { className: "fa-brands fa-discord" }) }), e("a", { id: "LinkButton", href: "https://github.com/MisterMikeMC", target: "_blank", children: e("i", { className: "fa-brands fa-github" }) }), e("a", { id: "LinkButton", href: "https://twitter.com/MrMike_Official", target: "_blank", children: e("i", { className: "fa-brands fa-twitter" }) })] }), e("div", { className: "Copyrigth", children: r("small", { children: ["\xA9 ", e("b", { children: "Rincon de los Devs" }), " - 2022"] }) })] })
}

function v() { return e("h1", { className: "Error", children: "Error404 - Pagina no encontrada." }) }
let D = [];
D.push(h, u, f, g, B, M);

function C() { let { id: o } = b(), a = D.find(n => n.BotID === o); return console.log(a), a ? r("div", { className: "Main", children: [e("img", { src: a.ImageBanner, alt: "Banner", className: "Image" }), e("h1", { className: "BotName", children: a.BotName }), r("div", { className: "Description", children: [e("h2", { className: "DescriptionText", children: "Descripci\xF3n:" }), e("p", { className: "DescriptionParrafo", children: a.Description })] })] }) : e("div", { children: e(v, {}) }) }

function T() { return r("div", { children: [e(x, {}), e("div", { children: r(L, { children: [e(s, { path: "/", element: e(d, {}) }), e(s, { path: "/bots", element: e(R, {}) }), e(s, { path: "/add", element: e(d, {}) }), e(s, { path: "/about", element: e(d, {}) }), e(s, { path: "/bots/:id", element: e(C, {}) }), e(s, { path: "*", element: e(v, {}) })] }) }), e(y, {})] }) }
I.exports.render(e(S, { children: e(T, {}) }), document.getElementById("main"));