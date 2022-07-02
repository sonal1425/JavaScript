document.getElementById("first").innerHTML = " First Javascript Program";


function current() {
    document.getElementById("second").innerHTML = Date();
}


function firstImage() {
    document.getElementById("myimg").src="img/nature.jpg";
    document.getElementById("myimg1").src="img/nature2.jpg";
}

function secondImage() {

    document.getElementById("myimg").src="img/nature3.jpg";
    document.getElementById("myimg1").src="img/autumn.jpg";
}

function myClick() {
    document.getElementById("four").innerHTML = "Hello World";
}


function getMessage() {
    document.getElementById("four").innerHTML = "Hello from JS";
}

function clickMe(){
    alert("This is Alert message....")
}

function lightOn()
{
    document.getElementById("light").src="img/lightOn.jpeg"
}


function lightOff()
{
    document.getElementById("light").src="img/lightOff.jpg"
}