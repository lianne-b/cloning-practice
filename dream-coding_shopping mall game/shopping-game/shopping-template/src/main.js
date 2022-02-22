const colorBlue = document.querySelectorAll(".category.color.blue");
const colorYellow = document.querySelectorAll(".yellow");
const colorPink = document.querySelectorAll(".pink");
const typePants = document.querySelectorAll(".pants");
const typeSkirt = document.querySelectorAll(".skirt");
const typeTshirt = document.querySelectorAll(".tshirt");

const items = document.querySelector(".items");
const item = document.querySelectorAll(".item");


colorBlue.onclick = function filterBlue() {
    colorYellow.classList.add(".hide");
}


console.log(colorBlue);