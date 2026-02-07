//Assignment 1 - Find the length of the last word in the string
let msg = "my name is Sriram"
let spl =msg.split(" ")
let lastWord=spl[(spl.length)-1]
console.log ("String lengt of the last word is "+lastWord.length)

//Assignment 2 - trim and the find the length of last word
let msg1 = "   My seconds name is Jeganathan    "
msg1=msg1.trim()
let spl1 =msg1.split(" ")
let lastWord1=spl1[(spl1.length)-1]
console.log ("String length of the last word is "+lastWord1.length)

//Assignment 3 - check if the given two strings are anagram
function isAnagram(str1,str2)
{
    let sorted1=str1.toLowerCase().split("").sort().join("")
    let sorted2=str2.toLowerCase().split("").sort().join("")
    if(sorted1==sorted2)
    {
        console.log("given words are anagram")
    }
    else
    {
        console.log("Given words are not Anagram")
    }
}
isAnagram("listen","Silent")
isAnagram("hello","world")