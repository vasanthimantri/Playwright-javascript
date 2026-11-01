//Print numbers from 1 to n. For multiples of 3, print 'Fizz'. 
// For multiples of 5, print 'Buzz'. 
// For multiples of both 3 and 5, print 'FizzBuzz'.

for(let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("Fizzbuzz")
    }

    else if(i%3==0)
    {
        console.log("FIZZ");
    }
else if (i%5==0)
{
    console.log("Buzz")
}
else
{
    console.log(i);
}
}