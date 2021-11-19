let buttons = document.querySelectorAll(".actions__icon");
let dislikeBtn = document.querySelector(".actions__icon:nth-child(2)");
let dislikeSpan = document.querySelector(".actions__icon:nth-child(2) span");
const subscribe = document.querySelector(".profile-subscribe");

var clickCount = 0;


buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.classList.toggle("clicked");
  });
});

dislikeBtn.addEventListener("click", (event) => {
    dislikeSpan.innerText = "1";
    ++clickCount;
    if (clickCount % 2 == 0) {
        dislikeSpan.innerText = "0";
    }
});


subscribe.addEventListener("click", (event) => {
    event.target.classList.toggle("clicked");
})



