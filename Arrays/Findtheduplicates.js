let arr1=[6,1,2,5,6,2,1]
//defined array 

let duplicates=arr1.filter((value,index) => {return arr1.indexOf(value)!==index});
//here what is happening is filter will used to check each and every element 
//indexof is used to find the duplicates if indexof 1 appears more than one time then we will find it as duplicate 

console.log(duplicates)

