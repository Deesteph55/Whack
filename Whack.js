
var hole1 = document.getElementById("hole1");
var hole2 = document.getElementById("hole2");
var hole3 = document.getElementById("hole3");
var hole4 = document.getElementById("hole4");
var hole5 = document.getElementById("hole5");
var hole6 = document.getElementById("hole6");
var hole7 = document.getElementById("hole7");

var mon1 = document.getElementById("mon1");
var mon2 = document.getElementById("mon2");
var mon3 = document.getElementById("mon3");
var mon4 = document.getElementById("mon4");
var mon5 = document.getElementById("mon5");
var mon6 = document.getElementById("mon6");
var mon7 = document.getElementById("mon7");

var points = document.getElementById("points");
points = 0;
const secondRound = document.getElementById("sec2");
const firstRound = document.getElementById("sec1");

secondRound.style.display = "none";
function checkScore(){ 
  if(points >= 10){
    secondRound.style.display = "block"; 
    firstRound.style.display = "none";
  }
}
mon1.onclick = () => {
  document.getElementById("hole1").style.backgroundColor = "red";
  points += 2;
  checkScore();
  document.getElementById("points").innerHTML = points;
  setTimeout(function() {
  document.getElementById("hole1").style.backgroundColor = "black";
}, 1000);
}

mon2.onclick = () => {
  document.getElementById("hole2").style.backgroundColor = "red";
  points += 2;
  checkScore();
  document.getElementById("points").innerHTML = points;
  setTimeout(function() {
  document.getElementById("hole2").style.backgroundColor = "black";
}, 1000);
}
mon3.onclick = () => {
  document.getElementById("hole3").style.backgroundColor = "red";
  points += 2;
  checkScore();
  document.getElementById("points").innerHTML = points;
  setTimeout(function() {
  document.getElementById("hole3").style.backgroundColor = "black";
}, 1000);
}
mon4.onclick = () => {
  document.getElementById("hole4").style.backgroundColor = "red";
  points +=2;
  checkScore();
  document.getElementById("points").innerHTML = points;
 setTimeout(function() {
  document.getElementById("hole4").style.backgroundColor = "black";
}, 1000); 
}
mon5.onclick = () => {
  document.getElementById("hole5").style.backgroundColor = "red";
  points +=4;
  document.getElementById("points").innerHTML = points;
 setTimeout(function() {
  document.getElementById("hole5").style.backgroundColor = "black";
}, 1000); 
}
  mon6.onclick = () => {
  document.getElementById("hole6").style.backgroundColor = "red";
  points +=0.5;
  document.getElementById("points").innerHTML = points;
 setTimeout(function() {
  document.getElementById("hole6").style.backgroundColor = "black";
}, 1000);
  }
mon7.onclick = () => {
  document.getElementById("hole7").style.backgroundColor = "red";
  points +=1;
  document.getElementById("points").innerHTML = points;
 setTimeout(function() {
  document.getElementById("hole7").style.backgroundColor = "black";
}, 1000); 
}

