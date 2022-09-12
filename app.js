const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

context.rect(50, 50, 100, 100);
context.fill();
context.rect(150, 50, 100, 100);

context.beginPath();
context.rect(250, 100, 100, 100)
setTimeout(() => { context.fill(); }, 4500);
context.fillStyle = "red";

// 비어있던 공간에서 4.5초뒤 context fill을 한다
// 모든경로의 선을 채워버리기 때문에 모두 red가 됨 그러므로 beginPath()로 새 경로를 만들어서 연결을 끊어줌