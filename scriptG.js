var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")", 
    verCor1(), verCor2();
};

function verCor1() {
    document.getElementById("cor1").innerHTML = color1.value;
};

function verCor2() {
    document.getElementById("cor2").innerHTML = color2.value;
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


