//=======================================================
// Method untuk Mengambil dukumen dari sebuah Element
// Method Menemukan Elemen Mengguakan ID
//=======================================================
// var nama = document.getElementById("hd");
// document.getElementById("hds").innerHTML = "Nama Saya Adalah : "+nama.innerHTML;

//=======================================================
// Method Menemukan Elemen Mengguakan TAG
//=======================================================

// var satu = document.getElementsByTagName("p");

// document.getElementById("hd").innerHTML = "Saya mengambil Kalimat Dari :  " + satu[2].innerHTML;

//=======================================================
// Mengambil Tag 'P' didalam DIVE
//=======================================================

// var satu = document.getElementById("main");
// var dua = satu.getElementsByTagName("p");

// document.getElementById("hd").innerHTML = "Ini Adalah Kalimat Index[0] : " + dua[0].innerHTML;

//=======================================================
// Method Menemukan Element Menggunakan CLASS
//=======================================================

// var satu = document.getElementsByClassName("hds");
// document.getElementById("hd").innerHTML = "Ini adalah kalimat ke : " + satu[1].innerHTML;

//=======================================================
// Method Menemukan Element Menggunakan Selector
//=======================================================
var satu = document.querySelectorAll("p.hds");

document.getElementById("hd").innerHTML ="Ini Adalah Kalimat Ke : " + satu[1].innerHTML;