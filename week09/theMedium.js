
console.log("the message!");

// global varialbe are usefull 
// pass the html elements into their own variable
let theBody = document.querySelector('body');

let theButton = document.getElementById('potato');
let theButton2 = document.getElementById('tomato');
let theTxt = document.querySelector('h2');
// add an event listener to an element
// and trigger a function when the user does the thing 
theButton.addEventListener('click', myGreatFunction);
theButton2.addEventListener('click', myGreatFunction2);
function myGreatFunction() {
    console.log("clicked!!");
    theBody.style.backgroundColor = "green";
    //textContent hold the human readable text inside the html element text
    theTxt.textContent = "green background!";

}

function myGreatFunction2() {
    console.log("clicked!!");
    theBody.style.backgroundColor = "red";
    //textContent hold the human readable text inside the html element text
    theTxt.textContent = "red background!";

}

//ES6 arrow notation - a new and faster functiuon syntax
document.addEventListener('keydown', theEvent => {
    console.log("you pressed a key!");
})

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);