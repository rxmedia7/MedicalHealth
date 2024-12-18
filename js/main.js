// Day-Night mode switch

const daymode = document.getElementById("gear");

daymode.addEventListener('click', () => {
    document.body.classList.toggle("daymode");
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

