const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "rgb(14, 14, 19)";

// an alternative: set width & height in HTML -> <canvas id="jsCanvas width="500 height="500>"
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

// create the initial canvas with white background color
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// initial values
ctx.lineWidth = 2.5;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false; 
let filling = false; 



function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

// with which we detect movement and draw lines accordingly
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath(); // path == line; create the (invisible) path, when mouse is not clicked
        ctx.moveTo(x, y); // set where the path should begin when painted
    } else {
        ctx.lineTo(x, y); // create a line from the previous position (single set of coordinates) of the path (moveTo(x,y)) to the current position of the line (another sets of coordinates)
        ctx.stroke(); // apply stroke to the line drawn
    }
}


////////// COLORS 
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color; 
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const strokeWeight = event.target.value;
    ctx.lineWidth = strokeWeight;
}

function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerText = "🪄";
    } else {
        filling = true;
        mode.innerText = "🖍";
    }
 }

 function handleCanvasClick() {
     if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
     }
 }

 function handleCM(event) {
     event.preventDefault();
 } 

 function handleSaveClick() {
     const image = canvas.toDataURL("image");
     const link = document.createElement("a");
     link.href = image;
     link.download = "PaintJS[EXPORT]🎨";
     link.click();

 }

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}


// Make HTMLcollection an array to retrieve each item in the list
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if (range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}