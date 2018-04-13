window.onscroll = function (e) {
    var s = window.pageYOffset;
    var top = s < window.innerHeight-100 ? 
        (window.innerHeight / 2 - 50) - (s / 2) :
        0;
    document.getElementById('name').style.top = top + 'px';
    document.getElementById('name').style.backgroundColor = 'rgba(0, 0, 51, '+map(s)+')';
    // console.log(map(s));
    document.getElementById('name').innerText = window.innerHeight+'px';
}
function map(value){
    var newval = value / (value < window.innerHeight ? window.innerHeight : value);
    newval = newval * 0.3 + 0.7;
    return (Math.round(newval * 1000) / 1000);
}