let arr1=[8,9,12,23]

//let arr2 = arr1.reduce((sum,value) => return {sum + value}) ;

let arr2 = arr1.reduce((sum,value) => {return sum+value},0);

//here zero is the initial value sum,value is like a,b 
console.log(arr2)


