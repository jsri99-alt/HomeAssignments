let number
function isNumberType (number)
{
    switch (true) {
        case (number>0):
        console.log ("Given number "+number+" is positive");
            break;
        case (number<0):
        console.log ("Given number "+number+" is negative");
            break;                          
        case (number==0):
        console.log ("Given number "+number+" is zero");
            break;
    }
   
}
isNumberType(-10)




