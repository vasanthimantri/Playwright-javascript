let student=["sagar","santosh","meena","sagar"]

console.log(student.lastIndexOf("sagar"));

//if i want to know the last occurance index of sagar

console.log(student.includes("santosh"));

//i want to know whether santosh present in array are not if present it will return true 


let score=[12,30,40,50,70]
console.log(score.find(x => x>20))

//it will return only the first element that matches teh values so output will be 30

console.log(score.findIndex(x => x>10))

//it will return the index of first element which staisfies the condition

console.log(score.findLastIndex(x => x>10))
//it will return the last index 

let grades=score.map(x => x>30 ? "pass" : "fail")

console.log(grades)

let tus=score.filter(x=>x>40 ? "pass" : "fail")

console.log(tus)


