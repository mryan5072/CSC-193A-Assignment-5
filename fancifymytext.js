document.getElementById("bigger").addEventListener("click", helloWorld()); 

function helloWorld() {
    alert("Hello, world!");
}

function biggerText() {
    document.getElementById("Text").style.fontSize="24px";
}

function radioFancy() {
    document.getElementById("Text").style.fontWeight="bold";
    document.getElementById("Text").style.color="blue";
    document.getElementById("Text").style.textDecoration="underline";

}

function radioBoring() {
    document.getElementById("Text").style = "";
}

function mooText() {
     var text = document.getElementById("Text")
     var as = text.value;
     var parts = as.split(".");
     as = parts.join("-Moo. ");
     as = as.toUpperCase();
     text.value = as;
}