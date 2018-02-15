console.log('Sudah Connect Bro');

function changeText(id) {
    id.innerHTML = "Ooops!";
}

var mo = document.getElementById('mo1');
mo.onmouseover = function(){
  this.innerHTML = "Hallo"
  this.style.backgroundColor = "red";
}
mo.onmouseout = function(){
  this.innerHTML = "world"
  this.style.backgroundColor = "blue";
}

var mo = document.getElementById('mo2');
mo.onmousedown = function(){
  this.innerHTML = "Hallo"
  this.style.backgroundColor = "green";
}
mo.onmouseup = function(){
  this.innerHTML = "world"
  this.style.backgroundColor = "lightblue";
}