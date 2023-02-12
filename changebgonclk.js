/*
*******Several times bgcolor change*********

var btn = document.getElementById("btn-click")
var mainDiv = document.querySelector("header div");

function onBtnClick() {
    mainDiv.style.backgroundcolor ="rgb(" + Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255) + ")"
}
btn.addEventListener('click', onBtnClick)
*/
//********Chnge bg color except button******//
var btn = document.getElementById("btn-click")
var mainDiv = document.querySelector("header div");
function onBtnClick() {
    mainDiv.style.backgroundColor = "lightcoral";
}
btn.addEventListener('click', onBtnClick)
/*
********change button color not bgcolor******
var btn = document.getElementById("btn-click")
function onBtnClick() {
    btn.style.backgroundColor = "lightcoral"
}
btn.addEventListener('click', onBtnClick)
*/