let arr1=[2,8,3,9]
let even=[];//to store the values in array 
let odd=[];

for(let i=0;i<arr1.length;i++)
{

    if(arr1[i] %2===0)
    {
        even.push(arr1[i])//to move the values in to the array I used push 
    }

    else
    {
        odd.push(arr1[i])
    }
}
console.log("Even numbers:" ,even)//by using comma we will print them as array 
console.log("odd numbers:" ,odd)