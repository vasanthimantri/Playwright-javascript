let string="MadaM"

let reversestring="";

for(let i=string.length-1;i>=0;i--)
{
    reversestring = reversestring + string[i];
   // console.log(reversestring)
}
if(string===reversestring)

{
    console.log("yes palindrome")
}
else
{
    console.log("not palindrome")
}