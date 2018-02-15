// Changing the Value of an Attribute

// Mengganti Gambar dengan javascript
var img = document.getElementById('img1');
// img.src = "img/img02.jpg";

img.onclick = function(){
	this.src = "img/img02.jpg";
}

// Mengganti Elemet HTML
var text = document.getElementById("p1");
text.onclick = function(){
	this.innerHTML = "PARAGRAF BARU";
}

// Menganti Value di HTML
var val = document.getElementById("myText");
val.value = "Goodbye";