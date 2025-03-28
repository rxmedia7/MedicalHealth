// Day-Night mode switch

const moon = document.getElementById("moon");
const sun = document.getElementById("sun");


sun.addEventListener('click', () => {
    document.body.classList.add("daymode");
});
moon.addEventListener('click', () => {
    document.body.classList.remove("daymode");
});

// Login menu

let loginbtn = document.querySelector("#loginbtn");
let loginpop = document.querySelector(".pop-cont");
let loginp = document.querySelector("#inp");
let loginsubmit = document.querySelector(".loginsubmit");
let noacc = document.querySelector(".noacc");


loginbtn.addEventListener('pointerdown', () => {
    loginpop.classList.add("showlogin")
});
loginsubmit.addEventListener('pointerdown', () => {
    loginpop.classList.remove("showlogin")
});

noacc.onclick = function () {
    loginpop.classList.remove("showlogin");
    regpop.classList.add("showreg");
};

// Register menu

let regisbtn = document.querySelector("#regisbtn");
let regpop = document.querySelector(".reg-cont");
let reginp = document.querySelector("#inp");
let regsubmit = document.querySelector(".regsubmit");
let haveacc = document.querySelector(".have_acc")

regisbtn.addEventListener('pointerdown', () => {
    regpop.classList.add("showreg")
});
regsubmit.addEventListener('pointerdown', () => {
    regpop.classList.remove("showreg")
});

haveacc.onclick = function () {
    regpop.classList.remove("showreg");
    loginpop.classList.add("showlogin");
};

let regnow = document.querySelector(".regnow");

regnow.addEventListener('pointerdown', () => {
    regpop.classList.add("showreg")
});

let moreinfo = document.querySelector("#info");
let clinics = document.querySelector("#clinics");

moreinfo.addEventListener('pointerdown', () => {
    document.classList.add("clinics")
});


//Livechat
let chatbutton = document.querySelector(".chat");
let livechat = document.querySelector(".livechat");
let exit = document.querySelector("#exitbtn")

chatbutton.addEventListener('pointerdown', () => {
    livechat.classList.add("livechatvisible");
});
exit.addEventListener('pointerdown', () => {
    livechat.classList.remove("livechatvisible");
});
