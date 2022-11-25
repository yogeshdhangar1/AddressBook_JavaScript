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
    let choice = prompt("\t--Menu-- \n1. Create Contact \n2. Disply Contacts \n3. Edit Contact \n4. Delete Contact\n5. Exit\n");
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
        t = false;
    }
    if (choice != 1 && choice != 2 && choice != 3&&choice != 4 && choice != 5) {
        console.log("Enter a Valid input")
    }
}
let Ashutosh = new Person('ashutosh','Nawale','Nagpur','Nagpur','Maharashtra','400015','9967945885','Ashu12@gmail.com');
let Yash = new Person('Yash','Ghade','Farm House','Panji','Goa','404715','7897894851','yash@gmail.com');
contactList.push(Ketan);
contactList.push(Yash);


function displaycontact(){
console.log(contactList);
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
let userGivenFirstName = prompt('Enter first name to edit contact\n')
for(let i =0;i<contactList.length;i++){        
    if(userGivenFirstName==contactList[i].firstName){
        contactList.splice(i, 1); 
        i--;
    }
}
}