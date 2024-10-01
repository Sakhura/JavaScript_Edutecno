//fecha y hora
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours()+":"+ today.getMinutes();
var dateTime= date+ ' ' +time;

var d = new Date();

document.getElementById('insertDate').innerHTML = date;
document.getElementById('insertTime').innerHTML = time;

var f = Math.random();
f = Math.ceil();

var t = Math.random();
t = Math.ceil();

document.getElementById('flightNumber').innerHTML = Math.floor(Math.random()* 10001);
document.getElementById('terminalNumber').innerHTML = Math.floor(Math.random()* 11);


var aviso= 'Se recuerda tener su pasaporte a mano';
alert(aviso);