
const moreBtn = document.querySelector(".metadata__title-button .moreBtn");
const title = document.querySelector(".metadata__title-button .title");

moreBtn.addEventListener("click", () => {
    moreBtn.classList.toggle("clicked");
    title.classList.toggle("clamp");
})

console.log(title);




