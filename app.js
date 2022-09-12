const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

context.fillRect(200, 200, 50, 200);
context.fillRect(400, 200, 50, 200);
context.lineWidth = 2;
context.strokeRect(300, 300, 50, 100);
context.fillRect(200, 200, 200, 20);
context.moveTo(200, 200);
context.lineTo(325, 100);
context.lineTo(425, 200);
context.stroke()


// 비어있던 공간에서 4.5초뒤 context fill을 한다
// 모든경로의 선을 채워버리기 때문에 모두 red가 됨 그러므로 beginPath()로 새 경로를 만들어서 연결을 끊어줌