console.log("Hi Kartthik! I am JS!");

var btn1 = document.getElementById('header-1-btn');
console.log(btn1);
console.log(typeof (btn1));
btn1.onclick = function () {
    console.log('Button 1 clicked');
    var headerLeft = document.getElementById('left-header');
    headerLeft.style.backgroundColor = "yellow";

    var heading = document.getElementById('tutorial-title');
    heading.innerHTML = "I got changed by JS";
}