const test = require("node:test");

function launchBrowser (openBrowser){
    if (openBrowser == "Chrome")
        console.log ("this is Chrome browser")
    else
        console.log("this is other browser")
    
}
function testType(testPhase){
    switch (testPhase)
    {
    case 'Smoketest':
    console.log ("This is smoke test")
    break;
    case 'Sanitytest':  
    console.log ('this is Sanity test')
    break;
    default:
        console.log ("This is other test phase")

}
}
launchBrowser("Chrome")
testType("Smoketest")  