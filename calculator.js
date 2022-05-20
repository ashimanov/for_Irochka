"use strict";

let numberOne = document.getElementById("x1").value;
let numberTwo = document.getElementById("y1").value;

function calculateAdd() {
    let numberOne = +document.getElementById("x1").value;
    let numberTwo = +document.getElementById("y1").value;
    let result = numberOne + numberTwo;
    document.getElementById("result").innerHTML = result;
}
function calculateSub() {
    let numberOne = +document.getElementById("x1").value;
    let numberTwo = +document.getElementById("y1").value;
    let result = numberOne - numberTwo;
    document.getElementById("result").innerHTML = result;
}
function calculateMul() {
    let numberOne = +document.getElementById("x1").value;
    let numberTwo = +document.getElementById("y1").value;
    let result = numberOne * numberTwo;
    document.getElementById("result").innerHTML = result;
}
function calculateDiv() {
    let numberOne = +document.getElementById("x1").value;
    let numberTwo = +document.getElementById("y1").value;
    let result = numberOne / numberTwo;
    document.getElementById("result").innerHTML = result;
}