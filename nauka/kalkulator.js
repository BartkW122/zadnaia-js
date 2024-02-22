var dodawanie=document.getElementById('dodawanie');
var odejmowanie=document.getElementById('odejmowanie');
var mnozenie=document.getElementById('mnozenie');
var dzielenie=document.getElementById('dzielenie');
var rowna_sie=document.getElementById('rowna_sie');
var wynik=document.getElementById('wynik');

var zero=document.getElementById('zero');
var jeden=document.getElementById('jeden');
var dwa=document.getElementById('dwa');
var trzy=document.getElementById('trzy');
var cztery=document.getElementById('cztery');
var piec=document.getElementById('piec');
var szesc=document.getElementById('szesc');
var siedem=document.getElementById('siedem');
var osiem=document.getElementById('osiem');
var dziewiec=document.getElementById('dziewiec');
function kalkulator(){
    var tab=[];
    zero.value=0;
    jeden.value=1;
    dwa.value=2;
    trzy.value=3;
    cztery.value=4;
    piec.value=5;
    szesc.value=6;
    siedem.value=7;
    osiem.value=8;
    dziewiec.value=9;


    zero.addEventListener('click',function(){
        tab.push(parseFloat(zero.value));
        console.info(tab);
    });
    jeden.addEventListener('click',function(){
        tab.push(parseFloat(jeden.value));
        console.info(tab);
    });
    dwa.addEventListener('click',function(){
        tab.push(parseFloat(dwa.value));
        console.info(tab);
    });
    trzy.addEventListener('click',function(){
        tab.push(parseFloat(trzy.value));
        console.info(tab);
    });
    cztery.addEventListener('click',function(){
        tab.push(parseFloat(cztery.value));
        console.info(tab);
    });
    piec.addEventListener('click',function(){
        tab.push(parseFloat(piec.value));
        console.info(tab);
    });
    szesc.addEventListener('click',function(){
        tab.push(parseFloat(szesc.value));
        console.info(tab);
    });
    siedem.addEventListener('click',function(){
        tab.push(parseFloat(siedem.value));
        console.info(tab);
    });
    osiem.addEventListener('click',function(){
        tab.push(parseFloat(osiem.value));
        console.info(tab);
    });
    dziewiec.addEventListener('click',function(){
        tab.push(parseFloat(dziewiec.value));
        console.info(tab);
    });
    dodawanie.addEventListener('click',function(){
        for(var i=0;i<tab.length-1;i++){
            var wynik_dod=tab[i]+tab[i+1];
            wynik.innerText=tab[i]+'+'+tab[i+1]+'=';
        }
    rowna_sie.addEventListener('click',function(){
        wynik.innerText=wynik_dod;
    });   
        tab.length=0;
    });

    odejmowanie.addEventListener('click',function(){
        for(var i=0;i<tab.length-1;i++){
            var wynik_odd=tab[i]-tab[i+1];
            wynik.innerText=tab[i]+'-'+tab[i+1]+'=';
        }
    rowna_sie.addEventListener('click',function(){
            wynik.innerText=wynik_odd;
    }); 
        tab.length=0;
    });
    mnozenie.addEventListener('click',function(){
        for(var i=0;i<tab.length-1;i++){
            var wynik_mno=tab[i]*tab[i+1];
            wynik.innerText=tab[i]+'*'+tab[i+1]+'=';
        }
    rowna_sie.addEventListener('click',function(){
            wynik.innerText=wynik_mno;
    });     
        tab.length=0;
    });
    dzielenie.addEventListener('click',function(){
        for(var i=0;i<tab.length-1;i++){
            var wynik_dzi=tab[i]/tab[i+1];
            wynik_dzi.toPrecision(1);
            wynik.innerText=tab[i]+'/'+tab[i+1]+'=';
        }
    rowna_sie.addEventListener('click',function(){
            wynik.innerText=wynik_dzi;
    });     
        tab.length=0;
    });

}
kalkulator();


