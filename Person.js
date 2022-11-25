class person{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
    getDetails(){
        return (`First Name: ${this.firstName} \nLast Name: ${this.firstName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}`)
    }
    
}
const prompt = require('prompt-sync')();
let contactList = new Array();
function checkName(name){
    let namePattern = RegExp('[A-Z]{1}[a-z]{2,}')
    if(namePattern.test(name)){
        return false;
    }else{
        return true;
    }
}
function checkAddress(address){
    let addPattern = RegExp('[a-zA-Z0-9\s]{3,}')
    if(addPattern.test(address)){
        return false;
    }else{
        return true;
    }
}

function checkPhoneNumber(pNum){
    let pNumPattern = RegExp('[5-9]{1}[0-9]{9}')
    if(pNumPattern.test(pNum)){
        return false;
    }else{
        return true;
    }
}
function checkEmail(email){
    let pNumPattern = RegExp('[a-z]{1,}([-+_])?([.][a-zA-Z0-9]{2,})?([A-Za-z0-9]{1,})?@[a-z0-9]{1,}.[a-z]{2,3}(.[a-z]{2,3})?')
    if(pNumPattern.test(email)){
        return false;
    }else{
        return true;
    }
}
function checkZip(zip){
    let zipPattern = RegExp('^[0-9]{6}$')
    if(zipPattern.test(zip)){
        return false;
    }else{
        return true;
    }
}

let t=true
let fName;
while(t){
    fName = prompt("Enter First name");
    t = checkName(fName);
    if(t==true){
        console.log("Invalid Input");
    }
}
let lastName;
t=true;
while(t){
    lastName = prompt("Enter Last name");
    t = checkName(lastName);
    if(t==true){
        console.log("Invalid Input");
    }
}
let address;
t=true;
while(t){
    address = prompt("Enter Address ");
    t = checkAddress(address);
    if(t==true){
        console.log("Invalid Input");
    }
}
let city;
t=true;
while(t){
    city = prompt("Enter City name");
    t = checkName(city);
    if(t==true){
        console.log("Invalid Input");
    }
}
let state;
t=true;
while(t){
    state = prompt("Enter State Name");
    t = checkName(state);
    if(t==true){
        console.log("Invalid Input");
    }
}
// let zip = 400156;
let zip;
t=true;
while(t){
    zip = prompt("Enter Zip");
    t = checkZip(zip);
    if(t==true){
        console.log("Invalid Input");
    }
}
let phoneNumber;
t=true;
while(t){
    phoneNumber = prompt("Enter PhoneNumber Name");
    t = checkPhoneNumber(phoneNumber);
    if(t==true){
        console.log("Invalid Input");
    }
}
let email;
t=true;
while(t){
    email = prompt("Enter Email Name");
    t = checkEmail(email);
    if(t==true){
        console.log("Invalid Input");
    }
}
let Ashutosh = new Person('Ashutosh','Nawale','Nagpur','Naagpur','Maharashtra','400015','9967945885','Ashu12@gmail.com');
let Yash = new Person('Yash','Ghade','Farm House','Panji','Goa','404715','7897894851','yash@gmail.com');
console.log(Ashutosh);
console.log(Yash);
contactList.push(obj);
console.log(contactList);

