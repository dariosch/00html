// web worker de test para contar automaticamente. usado en 05index.html
var i=0;

function timedCount(){
    i = i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();