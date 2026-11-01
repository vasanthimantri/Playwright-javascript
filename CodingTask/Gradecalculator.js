/*Calculate the letter grade based on a numeric score. 
A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.*/

let i=56;

if(i>100 || i<0)
{
    console.log("invalid score")
}
 else if(i>=90)
{
    console.log("A garde")
}
else if(i<90 && i>=80)

{
console.log("B garde")
}

else if(i<80 && i>=70 )

{
    console.log("c garde")
}
else if (i<70 &&  i>=60)

    {
        console.log("d garde")
    }
    else{
        console.log("Fail");
    }