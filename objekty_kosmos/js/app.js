let spaceShip = {
    name: "Enterprise",
    currentLocation:"Earth",
    flyDistance: 0,
    flyTo(place,distance) {
       for(const i in spaceShip){
            if (typeof this[i] != 'function') {
                return this.currentLocation = place;
                return this.flyDistance=distance
                
            }
        }
    },
    showInfo() {
        for (const i in spaceShip) {
            if (typeof this[i] != 'function') {
                console.info("statek:"+ this.name);
                console.info("statek odlecial do miejsca:"+ this.flyTo(gdzie_chcesz_leciec));
                console.info("Statek przeleciał już całkowity dystans:"+ this.flyTo(odleglosc));
                break;

            }
        }
    },
    meetClingon(){
        for(let i =1;i<=100;i++){
            randomowa_liczba=Math.floor(Math.random()*(0+1+1)+0);
          
            if(randomowa_liczba==1){
                ilosc_1++
            }
            if(randomowa_liczba==0){
                ilosc_0++
            }
        }
        if(ilosc_1>=50){
            console.log("statek "+this.name+" będąc w okolicy "+this.flyTo(gdzie_chcesz_leciec)+" zwycięsko wyszedł ze spotkania z Klingonami")
            
        }else{
            console.log("statek "+this.name+" będąc w okolicy "+this.flyTo(gdzie_chcesz_leciec)+" został pokonany przez Klingonów`")
        }
  
    }

};

var ilosc_1=0;
var ilosc_0=0;
var randomowa_liczba=0;
var gdzie_chcesz_leciec = "Saturn"; 
var odleglosc = Math.floor(Math.random()*(10000+10000000+1)+10000); 
spaceShip.showInfo();
spaceShip.meetClingon();





