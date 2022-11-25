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

let Ashutosh = new Person('Ashutosh','Nawale','Nagpur','Naagpur','Maharashtra','400015','9967945885','Ashu12@gmail.com');
let Yash = new Person('Yash','Ghade','Farm House','Panji','Goa','404715','7897894851','yash@gmail.com');
console.log(Ashutosh);
console.log(Yash);

