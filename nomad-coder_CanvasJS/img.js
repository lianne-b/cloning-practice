
const images = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG", "7.JPG", "8.JPG", "9.JPG", "10.JPG", "11.JPG", "12.JPG", "13.JPG", "14.JPG", "15.JPG"];
const imgContainer = document.querySelector("#jsImgContainer");
const imgSpan = document.querySelector("#jsSpan");


function createImg() {
    const img = document.createElement("img");
    img.src=`img/${images[Math.floor((Math.random())*(images.length))]}`
    imgContainer.appendChild(img);
}

function removeSpan() {
    imgSpan.classList.add("hidden");
}
 
if(imgContainer) {
    // imgContainer.addEventListener("click", imgCreate);
    imgContainer.addEventListener("click", createImg);
    imgContainer.addEventListener("click", removeSpan);
}

