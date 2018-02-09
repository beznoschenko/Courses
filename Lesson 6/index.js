$(function() {
var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");
ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.moveTo(150,100);
ctx.lineTo(200,50);
ctx.moveTo(250,50);
ctx.lineTo(250,100);
ctx.strokeStyle = "#000";
ctx.lineWidth = 1;
ctx.stroke();

});
function func(){
document.body.innerHTML = "Теперь здесь такой текст";
}
setTimeout(func,5000);