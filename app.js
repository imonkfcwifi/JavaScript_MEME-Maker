const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("line-width");
const context = canvas.getContext("2d");
const color = document.getElementById("color");
const colorOptions = Array.from(document.querySelectorAll(".color-option")
);
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("des-btn");
canvas.width = 800;
canvas.height = 800;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
context.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;
const eraseBtn = document.getElementById("eraser-btn");


function onColorClick(event) {
    context.strokeStyle = event.target.dataset.color;
    context.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;

}

function onMove(event) {
    if (isPainting) {
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        return;
    }
    context.beginPath();
    context.moveTo(event.offsetX, event.offsetY);

}
function onmousedown() {
    isPainting = true;
}

function cancle() {
    isPainting = false;
}

function onlineWidthChange(event) {
    context.lineWidth = event.target.value;
}
function oncolorchange(event) {
    context.strokeStyle = event.target.value;
    context.fillStyle = event.target.value;
}
function onModeClick() {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    }
    else {
        isFilling = true;
        modeBtn.innerText = "draw";
    }
}

function onCanvasClick() {
    if (isFilling) {
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);
    }
}

function onDestroyClick() {
    context.fillStyle = "white";
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);

}
function onEraserClick() {
    context.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onmousedown);
canvas.addEventListener("mouseup", cancle);
canvas.addEventListener("mouseleave", cancle);
lineWidth.addEventListener("change", onlineWidthChange);
color.addEventListener("change", oncolorchange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraserClick);
// 항상 마지막에 채워줘야 함.