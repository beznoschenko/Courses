$(function() {
var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.lineWisth = 1;
ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.stroke();

});