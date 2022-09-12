const canvas = document.querySelector("canvas");
const lineWidth = document.getElementById("line-width");
const context = canvas.getContext("2d");
const color = document.getElementById("color");
const colorOptions = Array.from(document.querySelectorAll(".color-option")
);
canvas.width = 800;
canvas.height = 800;

context.lineWidth = lineWidth.value;
let isPainting = false;

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


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onmousedown);
canvas.addEventListener("mouseup", cancle);
canvas.addEventListener("mouseleave", cancle);
lineWidth.addEventListener("change", onlineWidthChange);
color.addEventListener("change", oncolorchange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// 항상 마지막에 채워줘야 함.