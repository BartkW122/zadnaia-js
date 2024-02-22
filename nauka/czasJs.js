function odliczanie(){
var czas=new Date();

var godzina=czas.getHours();
if(godzina<10){
    godzina="0"+godzina;
}
var minuta=czas.getMinutes();
if(minuta<10){
    minuta="0"+minuta;
}
var sekundy=czas.getSeconds();
if(sekundy<10){
    sekundy="0"+sekundy;
}
document.getElementById("zegar").innerHTML=godzina+":"+minuta+":"+sekundy;
setTimeout("odliczanie()",1000);
}

var s = document.getElementById('s');
var m = document.getElementById('m');
var h = document.getElementById('h');



document.addEventListener('DOMContentLoaded', function() {
    function obrot() {
        var czas = new Date();
        var sekundy = czas.getSeconds();
        var minuty = czas.getMinutes();
        var godziny = czas.getHours();
        
        var stopin_p_s  = sekundy * 6;
        var stopin_p_m  = (minuty * 6) + (sekundy * 0.1);
        var stopin_p_h = (godziny * 30) + (minuty * 0.5);
        
        s.style.transform = 'rotate(' + stopin_p_s + 'deg)';
        m.style.transform = 'rotate(' + stopin_p_m + 'deg)';
        h.style.transform = 'rotate(' + stopin_p_h + 'deg)';
        
        setTimeout(obrot, 1000);
    }
    
    obrot();
});










