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
    table2:[],
    table3:[],
    randomNumber(min, max){
        let z_min=Math.floor(min)
        let z_max=Math.floor(max)
        let liczba=Math.floor(Math.random()*(z_max-z_min)+z_min)
        console.info("losowa liczba z przedziału "+" od "+z_min+" do "+z_max+" to:"+liczba)
            
        
       
    },
    generateIncTable(nr){
        let z_liczba=Math.floor(nr)
        let rozmiar=z_liczba
        for(let i=0 ;i<=z_liczba;i++){
            this.table.push(i)
        }
    },
    generateRandomTable(lng, min, max){
        let z_min=Math.floor(min)
        let z_max=Math.floor(max)
        let liczba=0
        for(let i=0 ;i<=lng;i++){
            liczba=Math.floor(Math.random()*(z_max-z_min)+z_min)
            this.table2.push(liczba)
        }
    },
    generateTableFromText(str){
        if(typeof str ==='string'){
        const slowo=str
        
        const podzial=slowo.split(' ')
        console.log(podzial)
        this.table3.push(podzial)
        }else{
            console.log("to nie jest string")
        }

    },
    getMaxFromTable(arr){
        let sortowanie=arr.sort((a,b)=>a-b)
        let r=arr.length
        let najwieksza=arr[r-1]
        console.log("największa liczba z tablicy to:"+najwieksza)
    },
    getMinFromTable(arr){
        let sortowanie=arr.sort((a,b)=>a-b)
        let najmniejsza=arr[0]
        console.log("najmniejsza liczba z tablicy to:"+najmniejsza)
    },
    delete(arr, index){
        console.log("przed usunięciem: "+arr)
        arr.splice(index,1)
        console.log("po usunięciu: "+arr)
    },
    show(){
       for(const elem in tableGenerator){
        if(typeof tableGenerator[elem]!=='function'){
            console.info(tableGenerator[elem])
        }
       }
    }
 }
 let tab=[56,12,1,3];
 tableGenerator.randomNumber(1,12)
 tableGenerator.generateIncTable(5)
 tableGenerator.generateRandomTable(3,1,20)
 tableGenerator.generateTableFromText("tablica jest pelna")
 tableGenerator.getMaxFromTable(tab)
 tableGenerator.getMinFromTable(tab)
 tableGenerator.delete(tab,3)
 tableGenerator.show()


//zad 7
let text={
    check(txt, word){
        const slowo=txt
        const podzial=slowo.split(' ')
        console.log(podzial)
        for(let i = 0;i<podzial.length;i++){
            if(podzial[i]===word){
                 console.log(true)
                 break
            }else{
                console.log(false)
            }
        }
    },
    getCount(txt){
        console.log(txt.length)
    },
    getWordsCount(txt){
        const slowo=txt
        const podzial=slowo.split(' ')
        console.log(podzial.length)
    },
    setCapitalize(txt){
        const slowo=txt
        const podzial=slowo.split(' ')
        for(let i = 0;i<slowo.length;i++){
        console.log(podzial[i][0].toUpperCase())
        }
    }
}
text.check("ala ma kota","eee")
text.getCount("ala ma kota")
text.getWordsCount("ala ma kota")
text.setCapitalize("ala ma kota")


