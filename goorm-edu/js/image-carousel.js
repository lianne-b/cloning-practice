// 1. Define the functions we had linked to our buttons in the HTML file 
// 2. Include a timer so taht our image carousel displays images automatically like a slideshow

var slidePosition = 1;

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
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