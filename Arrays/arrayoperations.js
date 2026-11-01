let name=[19,18,"shanthi"]
console.log(name)

let student = new Array(12,18,"tharun");
//if we want to create array using new keyword then we have to specify as array beside new then only syntax will be correct
console.log(student)

let strength=new Array(3)

//defined empty array with lenght 3 

strength[0]=12;
strength[1]="abc";
strength[2]=12;
strength[3]=45;

/*here directly we can't use push method to insert values we have to define
 the index based on index values will be inserted in the array */
 strength[4]="abc";

 //here i have given length 3 but tried to insert value at 4 index it has been added 
 strength.push("kite")
 //element inserted at last 
strength.pop()
//last element was deletd 
console.log(strength.indexOf(12))
//it will retrun first occurance index of 12 that is 0
console.log(strength.indexOf("abc"))

console.log(strength.at(-1))
//it will retrun last value present in array at will support negative values also 
console.log(strength)

strength.splice(2,1,88,89)
console.log(strength)
//here i want to remove 1 element that present at index 2 and add 88,89 
strength.splice(3,4,78,79)
console.log(strength) 

strength.unshift("tarak",11)
console.log(strength)
strength.shift()
//removes first element from array 
console.log(strength)