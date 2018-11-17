const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "DiamondSword",
  item: "Nightvision Goggles",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  let door = READLINE.question("There are 2 doors, a green door and a blue door. Pick one and choose wisely...");
  let direction;
  let bv;
  if(door == "green"){
   console.log("Ok, what did I just say. Hmm? I said to choose wisely and what did you do? You answered less than 5 seconds. Anyways you did choose the right door.");
  }
  if(door == "blue") {
    let news = READLINE.question("Yeah, I got good news and bad news. Choose one. G or B");
    if(news == "G") {
      console.log("Good news is that you chose the wrong door, which isn't really good news... My b");
    }
    else {
      console.log("Bad news is there there are no good news.")
    }
  }
  direction = READLINE.question("Ok, but now you hear noises from your right, I mean your left, I mean your straight. I DON'T KNOW, you have to choose the direction where to go, right, left or straight. OR even the basement, if you even dare...");

  if(direction == "right" || direction == "left" || direction == "straight") {
    console.log("Well good job you trapped yourself with rats all around you. You proud of yourself? I didn't think so.")
  }
  else if(direction == "basement" || direction == "Basement") { 
    console.log("Nice you chose the right one."); 
    bv = READLINE.question("Oh boy there's a flashlight that's brighter than your Nightvision Goggles but they do hurt your eyes and it will scar you for life. Do you still want to pick them up even if its a risk?");
  }
 if(bv == "no") {
    console.log("Well you died because rats pulled you into a trap and dabbed on you without you seeing and you couldn't see what was going on.");
  }
  if(bv == "yes") {
    console.log("You turned on your flashlight and you immediately saw rats coming your way and you dabbed on them and they ran away. Congrats you succeeded!");
  }
 

  
 else {
  
  // continue the story
}
}


console.log("Thanks for playing!");









