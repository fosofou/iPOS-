
$(document).ready(function(){
const screenWidth = window.screen.availWidth
const screenHeight = window.screen.availHeight
let squares = document.querySelectorAll('.square')
$(function () {
    moveLeftTop(squares[0]);
    moveRightTop(squares[1]);
    moveLeftBottom(squares[2]);
    moveRightBottom(squares[3]);
});  
});

function moveLeftTop(obj) {
    offsetTop = $(obj).offset().top;
    offsetLeft = $(obj).offset().left;
    
    $(obj).animate(
        {left : `-=${offsetLeft*2}px`,
        top: `-=${offsetTop*2}px`,
        opacity: '0.4'
        }
    ,{ duration: 3300, queue: false })
    return true;
}

function moveRightTop(obj) {
    offsetTop = $(obj).offset().top;
    offsetLeft = $(obj).offset().left
    
    $(obj).animate(
        {left : `+=${(offsetLeft-125)*2}px`,
        top: `-=${offsetTop*2}px`,
        opacity: '0.4'
        }
    ,{ duration: 3300, queue: false })
}

function moveLeftBottom(obj){
    offsetTop = $(obj).offset().top;
    offsetLeft = $(obj).offset().left;
    
    $(obj).animate(
        {left : `-=${offsetLeft*2}px`,
        top: `+=${(offsetTop-125)*2}px`,
        opacity: '0.4'
        }
    ,{ duration: 3300, queue: false })
}

function moveRightBottom(obj){
    offsetTop = $(obj).offset().top;
    offsetLeft = $(obj).offset().left;
    
    $(obj).animate(
        {left : `+=${(offsetLeft-125)*2}px`,
        top: `+=${(offsetTop-125)*2}px`,
        opacity: '0.4'
        }
    ,{ duration: 3300, queue: false })
}

