var currentangle = 0;

function AnimateCell(angle, cellnumber){
    if (cellnumber > 9) return;
    document.querySelector('.cells > .cell'+cellnumber).style.transform = 'rotateX('+(angle*90)+'deg)';
    setTimeout(function(){
        AnimateCell(angle, ++cellnumber);
    }, 100);
}

// var interval = setInterval(function(){
//     currentangle--;
//     AnimateCell(currentangle, 1);
// }, 8000);

document.body.onclick = function (e) {
    currentangle--;
    AnimateCell(currentangle, 1);

    // clearInterval(interval);
    // interval = setInterval(function(){
    //     currentangle--;
    //     AnimateCell(currentangle, 1);
    // }, 8000);
}

var view1 = document.querySelector('.view.view1').cloneNode(true);
view1.style.display = 'block';
document.querySelector('.view.view1').remove();
var sides1 = document.querySelectorAll('.cells > div > .side1');
for (var i = 0; i < sides1.length; i++) {
    sides1[i].appendChild(view1.cloneNode(true));
}
var view2 = document.querySelector('.view.view2').cloneNode(true);
view2.style.display = 'block';
document.querySelector('.view.view2').remove();
var sides2 = document.querySelectorAll('.cells > div > .side2');
for (var i = 0; i < sides2.length; i++) {
    sides2[i].appendChild(view2.cloneNode(true));
}
var view3 = document.querySelector('.view.view3').cloneNode(true);
view3.style.display = 'block';
document.querySelector('.view.view3').remove();
var sides3 = document.querySelectorAll('.cells > div > .side3');
for (var i = 0; i < sides3.length; i++) {
    sides3[i].appendChild(view3.cloneNode(true));
}
var view4 = document.querySelector('.view.view4').cloneNode(true);
view4.style.display = 'block';
document.querySelector('.view.view4').remove();
var sides4 = document.querySelectorAll('.cells > div > .side4');
for (var i = 0; i < sides4.length; i++) {
    sides4[i].appendChild(view4.cloneNode(true));
}
