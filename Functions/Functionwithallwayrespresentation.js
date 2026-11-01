//normal way of representation

function greet(name)
{
    return `welcome page ${name}`
}

//anonymous function means with out giving name 

let greet2 =function(message)
{
    return ` this is main page ${message}`
}

let greet3 = (name1,password) => `hello ${name1},${password}`
 
console.log(greet("facebook"))
console.log(greet2("hi welcome to this page"))
console.log(greet3("shanthi","sh#123"))