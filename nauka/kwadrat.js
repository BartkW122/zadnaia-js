var kwadrat=document.getElementById('k');
var lewo=document.getElementById('l');
var prawo=document.getElementById('p');
var tekst=document.getElementById('t');
var pozycjia=0;
var pozycjia2=0;


kwadrat.addEventListener('mouseenter',function (){
    kwadrat.style.backgroundColor="red";
 });
kwadrat.addEventListener('mouseleave',function (){
    kwadrat.style.backgroundColor="blue";
 });

 prawo.addEventListener('click',function (){
    pozycjia+=50;
    kwadrat.style.left=pozycjia+"px";
 });
 lewo.addEventListener('click',function (){
    pozycjia-=50;
    kwadrat.style.left=pozycjia+"px";
 });
 document.addEventListener('keydown',function (wydarzenie){
    if(wydarzenie.key==="d"){
    pozycjia+=50;
    kwadrat.style.left=pozycjia+"px";
    }else if(wydarzenie.key==="a"){
    pozycjia-=50;
    kwadrat.style.left=pozycjia+"px";
    }
    if(wydarzenie.key==="w"){
        pozycjia2-=50;
        kwadrat.style.top=pozycjia2+"px";
    }else if(wydarzenie.key==="s"){
        pozycjia2+=50;
        kwadrat.style.top=pozycjia2+"px";
    }
    if(kwadrat.style.left<window.innerWidth){
        kwadrat.style.left="100%";
    }
 });

 kwadrat.addEventListener('click',function(){
    tekst.style.visibility="visible"
 });
 kwadrat.addEventListener('mouseleave',function(){
    tekst.style.visibility="hidden"
 });
t.addEventListener('copy',function(){
    alert('elo!');
 });
 

