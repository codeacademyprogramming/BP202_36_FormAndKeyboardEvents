let boxes = document.getElementsByClassName('box');
let box = boxes[0];
let left=0;
window.addEventListener('keydown',function(e){
    if(e.keyCode==39){
        left+=2;
        box.style.left = left+'px';
    }
    else if(e.keyCode==37){
        left-=2;
        box.style.left = left+'px';

        if(left<-50){
            left = window.screen.width;
            box.style.left =left  +'px'
        }

    }
    else if(e.keyCode==13){
        console.log(boxes)
    }
})
