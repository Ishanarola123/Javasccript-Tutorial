//always make constructor function name is start with capital 


function BankAccount(customerName, balance = 0) {
    //variables 
    this.customerName = customerName;
    this.accountNUmber = Date.now();
    this.balance = balance;
 

    //methods are there 


}

//it makes object from this constructor
// const IshaAcoount=new BankAccount("isha",2500);
// console.log(IshaAcoount);
// const JohnAcoount=new BankAccount("john",2500);
// console.log(JohnAcoount);
// // document.write(IshaAcoount);

//dynamic object

//first get the values 
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');


const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

//open account
accountForm.addEventListener(
    'submit', (e) => {
        //required for not reload page
        e.preventDefault();
        //+ operator is called as unary operator which is convert to string to number 
        const account = new BankAccount(customerName.value, +balance.value);
        accounts.push(account);
        console.log(accounts);

        // printdata();
    }
)


function printdata() {
    for (let i = 0; i < accounts.length; i++) {
        console.log(accounts[i]);
      
        document.getElementById("demo").innerHTML=accounts[i].customerName;
        document.getElementById("demo1").innerHTML=accounts[i].balance;
    }
}


