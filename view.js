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
