//closure is the most important topic to handle data privacy and accessing the outer variable inside the inner function 

function check(account)
{
    let balance =1000;
}
return{
deposit:function(amount)
{
    balance=balance+amount;

    console.log(balance)
},
checkbalance :function()

{
    console.log(balance)

}
}
let account2=check();
//here I passed mutiple values deposit & check balance
console.log(account2.balance);

console.log(account2.deposit(900));
console.log(account2.checkbalance)

