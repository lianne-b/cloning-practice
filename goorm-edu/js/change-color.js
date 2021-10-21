
// 색상 변경 객체에 클릭 상태를 나타내는 메소드 생성.
// (+= 이게 뭘 의미하는 지 알아 볼 것.)

var clickAction = 1;

function changeTextColor(n) {
    clickState(clickAction += n);
}

function currentState(n) {
    clickState(clickAction = n);
}

function clickState(n) {
    var i;
    var text = document.getElementsByClassName("main-card__message");
    if (n > 0) {clickAction = text.length}
    for (i = 0; i < text.length; i++) {
        text[i].style.color = "blue";
    }
    for (i = 0; i < text.length; i++){
        text[i].className = text[i].className.replace(" enable", "");
    }
    text[clickAction-1].style.color = "var(--main-text-color)";
    text[clickAction-1].className += " enable";
}


////////////////////////////////////////////


var slidePosition = 1;

function plusSlides(n) {
    SlideShow(slidePosition += n);
}

function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("main-banner__img");
    var arrows  = document.getElementsByClassName("main-banner__navigation");
    if (n > 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[1].style.display = "none";
    }
    for (i = 0; i < arrows.length; i++){
        arrows[i].className = arrows[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display = "block";
    arrows[slidePosition-1].className += " enable";
}


var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("main-banner__img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "block";
    setTimeout(SlideShow,4000); // Change image every 2 seconds

}