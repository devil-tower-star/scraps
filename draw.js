const canvas = document.getElementById("draw");
canvas.width = 400;
canvas.height = 260;
canvas.addEventListener("click", penTool); // fires after mouse left btn is released
canvas.addEventListener("mousedown", setLastCoords); // fires before mouse left btn is released
canvas.addEventListener("mousemove", freeForm);


const ctx = canvas.getContext("2d");

function setLastCoords(e) {
    const {x, y} = canvas.getBoundingClientRect();
    lastX = e.clientX - x;
    lastY = e.clientY - y;
}

function freeForm(e) {
    if (e.buttons !== 1) return; // left button is not pushed yet
    penTool(e);
}

function penTool(e) {
    const {x, y} = canvas.getBoundingClientRect();
    const newX = e.clientX - x;
    const newY = e.clientY - y;

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();

    lastX = newX;
    lastY = newY;
}

let lastX = 0;
let lastY = 0;  