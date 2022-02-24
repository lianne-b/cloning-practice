"use strict";

const arrayPants = Array.from(document.getElementsByClassName("pants"));
const arraySkirt = Array.from(document.getElementsByClassName("skirt"));
const arrayTshirt = Array.from(document.getElementsByClassName("tshirt"));
const arrayYellow = Array.from(document.getElementsByClassName("yellow"));
const arrayBlue = Array.from(document.getElementsByClassName("blue"));
const arrayPink = Array.from(document.getElementsByClassName("pink"));


function filterBlue() {
    arrayBlue.map(value => value.classList.remove("visible"));
    arrayYellow.map(value => value.classList.add("visible"));
    arrayPink.map(value=> value.classList.add("visible"));
}

function filterYellow() {
    arrayYellow.map(value => value.classList.remove("visible"));
    arrayBlue.map(value => value.classList.add("visible"));
    arrayPink.map(value=> value.classList.add("visible"));
}

function filterPink() {
    arrayPink.map(value => value.classList.remove("visible"));
    arrayBlue.map(value => value.classList.add("visible"));
    arrayYellow.map(value => value.classList.add("visible"));
}

function filterPants() {
    arrayPants.map(value => value.classList.remove("visible"));
    arraySkirt.map(value => value.classList.add("visible"));
    arrayTshirt.map(value=> value.classList.add("visible"));
}

function filterSkirt() {
    arraySkirt.map(value => value.classList.remove("visible"));
    arrayPants.map(value => value.classList.add("visible"));
    arrayTshirt.map(value=> value.classList.add("visible"));
}

function filterTshirt() {
    arrayTshirt.map(value => value.classList.remove("visible"));
    arrayPants.map(value => value.classList.add("visible"));
    arraySkirt.map(value=> value.classList.add("visible"));
}


(document.querySelector(".category-c-b")).addEventListener("click", filterBlue);
(document.querySelector(".category-c-y")).addEventListener("click", filterYellow);
(document.querySelector(".category-c-p")).addEventListener("click", filterPink);

(document.querySelector(".category-t-p")).addEventListener("click", filterPants);
(document.querySelector(".category-t-s")).addEventListener("click", filterSkirt);
(document.querySelector(".category-t-t")).addEventListener("click", filterTshirt);