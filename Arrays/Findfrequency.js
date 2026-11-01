let arrobj=[5,1,2,1,3,2]

let frequency={}
//here I am created empty obj

for(let i=0;i<arrobj.length;i++)
    {
        let num= arrobj[i];
        //to fecth each value and store in num
        if(frequency[num])
        {
           frequency[num]++
            
        }
        else
        {
            frequency[num]=1;
        }
    }
        console.log(frequency)



