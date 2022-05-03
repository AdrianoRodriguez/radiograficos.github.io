// TPYE WRITER FOR THE 'nav__title'

var text = document.getElementById("typeWriter");
var str = text.innerHTML;

text.innerHTML = "";

var speed = 200;
var t = 0;


// typewriter effect
function typeWriter() {
    if (t < str.length) {
        text.innerHTML += str.charAt(t);
        t++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, speed);