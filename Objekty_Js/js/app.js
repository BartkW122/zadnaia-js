//zad 1
const rectangle={
    height:20,
    width:20,
    showArea(){
        console.info("kwadrat ma wysokosc "+this.height+" szerokosc "+this.width+" jego pole to "+this.height*this.width+"[j2]")
    }
}
const circle={
    radius:10,
    showArea(){
        console.info("koło ma promień "+this.radius+" jego pole to "+Math.PI*Math.pow(this.radius,2)+"[j2]")
    }
}
rectangle.showArea()
circle.showArea()

//zad 2
let currentUser={
    name:"Bartek", 
    surname:"Kowalski", 
    email:"bork@gmail.com", 
    www:"kodowanie.pl", 
    userType:"Admin", 
    isActive:true,
    show(){
        for(const user in currentUser){
            if( typeof currentUser[user]!=='function'){
                console.info(user+":"+currentUser[user])
            }
        }
    },
    setActive(active){
        if(this.isActive==true){
            active=this.isActive
            active="Tak"
            console.info(active);
        }else{
            active=this.isActive
            active="Nie"
            console.info(active);
        }
    }
}
currentUser.show()
currentUser.setActive()

//zad 3
const book={
    title:"Robert", 
    author:"Ficatio", 
    pageCount:123, 
    publisher:"LOK",
    showDetails(){
        for(const objekt in book){
            if( typeof book[objekt]!=='function'){
                console.info(objekt+":"+book[objekt])
            }
        }
    }
}
book.showDetails()
//zad 4
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

//zad 5
let book2={
    users:[],
    addUser(name2,age2, phone2){
           let elem={
            name:name2,
            age:age2,
            phone:phone2
           } 
           this.users.push(elem)
        
    },
    showUsers(){
        for(const user in book2){
            if( typeof book2[user]!=='function'){
                console.info(book2[user])
            }
        }
    },
    findByName(name2){ 
        for(const user in book2){
        if( typeof book2[user]!=='function'){
            
            console.info(book2[user])
        }
        }
    }, 
    findByPhone(phone2){ 
        for(const user in book2){
        if( typeof book2[user]!=='function'){
            
            console.info(book2[user])
        }
        }
    },
    getCount(){
        for(const user in book2){
            if( typeof book2[user]!=='function'){
                console.info(book2[user].length)
            }
        }
    }
}

book2.addUser('Edek',18,12345633)
book2.addUser('Max',23,123455553)
book2.addUser('Juba',43,567432890)
book2.showUsers()
book2.findByName('Max')
book2.findByName(123455553)
book2.getCount()

//zad 6
 let tableGenerator={
    table:[],
    randomNumber(min, max){
        let z_min=Math.floor(min)
        let z_max=Math.floor(max)
        let liczba=0
        for(let i=0 ;i<this.table.length;i++){
            liczba=Math.floor(Math.random()*(z_max-z_min)+z_min)
            this.table.push(liczba)
        }
    },
    show(){
       for(const elem in tableGenerator){
        if(typeof tableGenerator[elem]!=='function'){
            console.info(tableGenerator[elem])
        }
       }
    }
 }
 tableGenerator.randomNumber(12,45)
 tableGenerator.show()





