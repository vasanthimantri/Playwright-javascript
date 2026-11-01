function welcome(name)
{
    return`Hello ${name}`
}
//anonymous functions means function with out function name 

let str2 = function(hello){

    return`bye ${hello}`;
}

console.log(welcome("This class"))
console.log(str2("class has ended"))
//passing parameters

function login(username)
{
    return `welcome to this page ${username}`
}

let logout=function (checkin_page)
{
return `loging out of the page ${checkin_page}`
}

console.log(login("vasanthi"))
console.log(logout("logoff"))