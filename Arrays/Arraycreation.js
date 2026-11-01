let values=[10,12,"vasanthi"]
//we have mixed values in array 

console.log(values.length)

values.push(16,19);
console.log(values)

values.pop()
//here i didn't specified which element I want to remove automatically last element is removed
console.log(values)

values.pop(12)
//here i mentioned which element I want to remove but it removed only last element instead of specified element 
console.log(values)