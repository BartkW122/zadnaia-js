var check = document.getElementById('check');
var but = document.getElementById('but');
var wynik = document.getElementById('wynik');


but.addEventListener('click', function() {
    var for1 = document.getElementById('for1').value; 
    wynik.innerHTML = "napisałeś: " + for1;
});


