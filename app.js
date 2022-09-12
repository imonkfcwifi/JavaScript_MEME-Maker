const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

context.lineWidth = 2;
let isPainting = false;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff"
];

function onMove(event) {
    if (isPainting) {
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        return;
    }
    context.moveTo(event.offsetX, event.offsetY);

}
function onmousedown() {
    isPainting = true;
}

function cancle() {
    isPainting = false;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onmousedown);
canvas.addEventListener("mouseup", cancle);
canvas.addEventListener("mouseleave", cancle);
// 항상 마지막에 채워줘야 함.