const READLINE = require("readline-sync");

let cr = READLINE.question("Did you clean your room?");
if(cr == "Eh, no thank you") {
	console.log("OK, no video games for a whole week and no food for you coming from me. This isn't child neglect, it's punishment. Now go and find your own food");
}
else {
	console.log("Great!");
}

 
let wc = READLINE.question("Did you wash your clothes?");
if(wc == "no") {
	console.log("Do it or else...");
}
if(wc == "yes") {
	console.log("Good Boy, you want a scooby snack?");
}

if(wc == "Maybe" || "I don't even know") {
	console.log("You're going to have problems with me, if you don't answer me properly.");
}