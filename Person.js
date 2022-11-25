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
    setCity(city){
        this.city=city;
    }
    
}
const prompt = require('prompt-sync')();
//contactlist Array to save new contacts
let contactList = new Array();
let t = true;
while (t) {
    let choice = prompt("\t--Menu-- \n1. Create Contact \n2. Disply \n3. Edit Contact \n4. Delete Contact\n5. Search\n6. Sort\n7. Exit\n");
    if (choice === "1") {
        addContact();
    }
    if (choice === "2") {
        displaycontact();
    }
    if (choice === "3") {
        editContact();
    }
    if (choice === "4") {
        deleteContact();
    }
    if (choice === "5") {
        searchContact();
    }
    if (choice === "6") {
        sortingOfContacts();
    }
    if (choice === "7") {
        t = false;
    }
    if (choice != 1 && choice != 2 && choice != 3&&choice != 4 && choice != 5) {
        console.log("Enter a Valid input")
    }
}
function addContact(){
    function checkNameExit(userGivenFirstName){
        for(let i =0;i<contactList.length;i++){        
            if(userGivenFirstName==contactList[i].firstName){  
                console.log('Name already exit, create contact with different name')  
                return true;
            }else{
                return false;
            }
        }
    }
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
    t=true
    let fName;
    while(t){
    fName = prompt("Enter First name ");
        t = checkName(fName);
        if(t==true){
            console.log("Invalid Input");
        }
        t=checkNameExit(fName);
    }
    let lastName;
    t=true;
    while(t){
        lastName = prompt("Enter Last name ");
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
        city = prompt("Enter City name ");
        t = checkName(city);
        if(t==true){
            console.log("Invalid Input ");
        }
    }
    let state;
    t=true;
    while(t){
        state = prompt("Enter State Name ");
        t = checkName(state);
        if(t==true){
            console.log("Invalid Input");
        }
    }
    let zip;
    t=true;
    while(t){
        zip = prompt("Enter Zip ");
        t = checkZip(zip);
        if(t==true){
            console.log("Invalid Input ");
        }
    }
    let phoneNumber;
    t=true;
    while(t){
        phoneNumber = prompt("Enter Phone Number " );
        t = checkPhoneNumber(phoneNumber);
        if(t==true){
            console.log("Invalid Input");
        }
    }
    let email;
    t=true;
    while(t){
        email = prompt("Enter Email ");
        t = checkEmail(email);
        if(t==true){
            console.log("Invalid Input ");
        }
    }
    t=true;
    let obj = new Person(fName,lastName,address,city,state,zip,phoneNumber,email);
    contactList.push(obj);
}

function displaycontact(){
    while(true){
        let choice = prompt('--Display Menu---\n1. Display all contacts\n2. Display Total number of contacts\n3. Display total contact in given City\n4. Display total contact in given State\n5. Back\n')
        if (choice === "1") {
            console.log(contactList);
        }
        if (choice === "2") {
            console.log("There are total "+contactList.length+" contacts saved");
        }
        if (choice === "3") {
            let userGivenCity = prompt("Enter City to get count of persons\n");
            displayCountOfPersonByCity(userGivenCity);
        }
        if (choice === "4") {
            let userGivenState = prompt("Enter State to search person\n");
            displayCountOfPersonBySate(userGivenState);
        }
        if (choice === "5") {
            break;
        }
    }
}
function displayCountOfPersonByCity(userGivenCity){
    let count = 0;
    for(let i =0;i<contactList.length;i++){        
        if(userGivenCity==contactList[i].city){
            count++;
        }
    }
    console.log('There are '+count+' person in '+userGivenCity)
}
function displayCountOfPersonBySate(userGivenState){
    let count = 0;
    for(let i =0;i<contactList.length;i++){        
        if(userGivenState==contactList[i].state){
            count++;
        }
    }
    console.log('There are '+count+' person in '+userGivenState)
}
function editContact(){
    let userGivenFirstName = prompt('Enter first name to edit contact')
    for(let i =0;i<contactList.length;i++){        
        if(userGivenFirstName==contactList[i].firstName){
            while(true){
                let choice = prompt('--Edit Menu---\n1. Edit First Name\n2. Edit Last Name\n3. Edit Address\n4. Edit City\n5. Edit State\n6. Edit Zip\n7. Edit Phone number\n8. Edit email\n9. Back')
                if (choice === "1") {
                    let editedFirstName = prompt('Enter new first name');
                    contactList[i].firstName = editedFirstName;
                }
                if (choice === "2") {
                    let editedLastName = prompt('Enter new last Name');
                    contactList[i].lastName = editedLastName;
                }
                if (choice === "3") {
                    let editedAddress = prompt('Enter new Address ');
                    contactList[i].address = editedAddress;
                }
                if (choice === "4") {
                    let editedCity = prompt('Enter new City ');
                    contactList[i].address = editedCity;
                }
                if (choice === "5") {
                    let editedState = prompt('Enter new State ');
                    contactList[i].state = editedState;
                }
                if (choice === "6") {
                    let editedZip = prompt('Enter new Zip ');
                    contactList[i].zip = editedZip;
                }
                if (choice === "7") {
                    let editedPhoneNumber = prompt('Enter new Phone Number ');
                    contactList[i].phoneNumber = editedPhoneNumber;
                }
                if (choice === "8") {
                    let editedPhoneNumber = prompt('Enter new email ');
                    contactList[i].email = editedPhoneNumber;
                }
                if (choice === "9") {
                    break;
                }
                if (choice != "1" && choice != "2" && choice != "3"&&choice != "4" && choice != "5" && choice != "6"&&choice != "7" && choice != "8" && choice != "9") {
                    console.log("Enter a Valid input")
                }
            
            }
            
        }
    }
}
function deleteContact(){
    let userGivenFirstName = prompt('Enter first name to delete contact\n5')
    for(let i =0;i<contactList.length;i++){        
        if(userGivenFirstName==contactList[i].firstName){
            contactList.splice(i, 1); 
            i--;
        }
    }
}
//Search Method
function searchByCityName (){
    let userGivenCity = prompt('Enter City to search person\n');
    let count = 0;
    for(let i =0;i<contactList.length;i++){        
        if(userGivenCity==contactList[i].city){
            console.log(contactList[i]);
            count++;
        }
    }
    if(count==0){
        console.log("No record found");
    }else{
        console.log('There are '+count+' person in '+userGivenCity)
    }
}
function searchByStateName (){
    let userGivenState = prompt('Enter State to search person\n');
    let count = 0;
    for(let i =0;i<contactList.length;i++){        
        if(userGivenState==contactList[i].state){
            console.log(contactList[i]);
            count++;
        }
    }
    if(count==0){
        console.log("No record found");
    }else{
        console.log('There are '+count+' person in '+userGivenState)
    }
}
function searchContact(){
    while(true){
        let choice = prompt('--Search Menu---\n1. Search person by City\n2. Search person by State\n3. Back\n')
        if (choice === "1") {
            searchByCityName();
        }
        if (choice === "2") {
            searchByStateName();
        }
        if (choice === "3") {
            break;
        }
    }
}
function sortingOfContacts(){
    while(true){
        let choice = prompt('--Sort Contacts---\n1. By first Name\n2. By City\n3. By State\n4. By Zip\n5. Back\n')
        if (choice === "1") {
            sortByName();
        }
        if (choice === "2") {
            sortByCity();
        }
        if (choice === "3") {
            sortByState();
        }
        if (choice === "4") {
            sortByZip();
        }
        if (choice === "5") {
            break;
        }
    }
}
function sortByName(){
    contactList.sort((a, b) => {
        const nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log(contactList);
}
function sortByCity(){
    contactList.sort((a, b) => {
        const nameA = a.city.toUpperCase(); // ignore upper and lowercase
        const nameB = b.city.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log(contactList);
}
function sortByCity(){
    contactList.sort((a, b) => {
        const nameA = a.city.toUpperCase(); // ignore upper and lowercase
        const nameB = b.city.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log(contactList);
}
function sortByState(){
    contactList.sort((a, b) => {
        const nameA = a.state.toUpperCase(); // ignore upper and lowercase
        const nameB = b.state.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log(contactList);
}
function sortByZip(){
    contactList.sort((a, b) => {
        const nameA = a.zip.toUpperCase(); // ignore upper and lowercase
        const nameB = b.zip.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log(contactList);
}