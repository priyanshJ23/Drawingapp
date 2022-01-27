const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorEL = document.getElementById('color');
const  sizedecrease = document.getElementById('increase');
const  sizeincrease = document.getElementById('decrease');
const  ssize = document.getElementById('size');
const  clearEL = document.getElementById('clear');
let size = 10
let color = 'black';

isPressed = false;
let x
let y 
colorEL.addEventListener("change" ,  (e) => color = e.target.value)
function sincrease()
{
    if(size===1)
    {
        size = size+4;
    }
    else if(size>50)
    {
        size=50;
    }
    else
    {
        size+=5
    }
    
   
    ssize.innerHTML = size;
    
}
function sdecrease()
{
    size-=5
    if(size<5)
    {
       size=1;
    }
    ssize.innerHTML = size;
}
canvas.addEventListener('mousedown', (e) =>
{
    isPressed = true;
    x = e.offsetX
    y = e.offsetY
    
})
canvas.addEventListener('mouseup', (e) =>
{
    isPressed = false;
    x = undefined
    y = undefined

})
canvas.addEventListener('mousemove', (e) =>
{
    if(isPressed)
    {
    x2 = e.offsetX
    y2 = e.offsetY

    drawCircle(x2,y2)
    drawline(x,y,x2,y2)
    x= x2
    y = y2
    }
    
})

clearEL.addEventListener('click',() => ctx.clearRect(0,0,canvas.width,canvas.height))
function drawCircle(x,y)
{
            
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); 
    ctx.fillStyle = color;
    ctx.fill();
}
function drawline(x1,y1,x2,y2)
{
      ctx.beginPath()
      ctx.moveTo(x1,y1)
      ctx.lineTo(x2,y2)
      ctx.strokeStyle = color;
      ctx.lineWidth = size*2
      ctx.stroke()
}

function gethome()
{
ctx.lineWidth = size;
ctx.strokeRect(75, 140, 150, 110);
ctx.fillRect(130, 190, 40, 60);
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
}


function getcircle()
{
    ctx.beginPath();
    ctx.arc(500, 500, size*5, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
}
