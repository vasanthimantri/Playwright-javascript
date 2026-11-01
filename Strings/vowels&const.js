let string1="programming";

let vowels=0;
let consonants=0;

    for(let i=0;i<string1.length;i++)
    {
        let count=string1[i]
        if("aeiou".includes(count.toLowerCase()))
        {
            vowels++;
        }
        else
        {
            consonants++
        }
    }
    console.log("vowels:" + vowels);
    console.log("consonants:"  +consonants)

