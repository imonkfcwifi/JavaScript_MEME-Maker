const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

context.moveTo(50, 50);
context.lineTo(150, 50);
context.lineTo(150, 150);
context.lineTo(50, 150);
context.lineTo(50, 50);
context.stroke();
context.fill();


// 비어있던 공간에서 4.5초뒤 context fill을 한다
// 모든경로의 선을 채워버리기 때문에 모두 red가 됨 그러므로 beginPath()로 새 경로를 만들어서 연결을 끊어줌