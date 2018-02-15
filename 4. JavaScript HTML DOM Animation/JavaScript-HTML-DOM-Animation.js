console.log('Sudah Connect Bro');

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame01, 5);

  function frame01() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

// Rumus Untuk Animasi
// var id = setInterval(frame, 5);

// function frame() {
//     if (/* test for finished */) {
//         clearInterval(id);
//     } else {
//         /* code to change the element style */  
//     }
// }