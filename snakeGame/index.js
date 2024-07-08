let blocksize = 25;
let rows = 34;
let cols = 70;
let board;
let context;


// snake head 
let snakeX = blocksize * 5;
let snakeY = blocksize * 5;

// food 
let foodX;
let foodY;

let snakeBody = [];

let gameOver = false;

// snake speed 
velocityX = 0;
velocityY = 0;

document.addEventListener("DOMContentLoaded",function(){
    board = document.getElementById('board');
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    generateFood();
    document.addEventListener("keyup",changeDirection);
    setInterval(update,100);
})


function update(){
    // board 
    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height);

    // food 
    context.fillStyle = 'red';
    context.fillRect(foodX,foodY,blocksize,blocksize);

    if(snakeX === foodX && snakeY === foodY){
        snakeBody.push([foodX,foodY]);
        generateFood();
    }

    for(let i = snakeBody.length - 1 ; i > 0 ; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length){
        snakeBody[0] = [snakeX,snakeY];
    }

    if(snakeX < 0 || snakeX > cols * blocksize || snakeY < 0 || snakeY > rows * blocksize){
        gameOver = true;
    }
    
    for (let i = 0 ; i < snakeBody.length ; i++){
        if(snakeX === snakeBody[i][0] && snakeY === snakeBody[i][0] ){
            gameOver = true;
            break;
        }
    }

    if(gameOver === true){
        window.location.reload();
    }

    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;
    // snake head 
    context.fillStyle = "lime";
    context.fillRect(snakeX,snakeY,blocksize,blocksize);
    for(let i = 0 ; i < snakeBody.length ; i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blocksize,blocksize);
    }
}

function generateFood(){
    foodX = Math.floor(Math.random() * cols) * blocksize;
    foodY = Math.floor(Math.random() * rows) * blocksize;
}

function changeDirection(e){
    if(e.code === "ArrowUp" && velocityY != -1){
        console.log("up");
        velocityX = 0;
        velocityY = -1;
    }else if(e.code === "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }else if(e.code === "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }else if(e.code === "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}

