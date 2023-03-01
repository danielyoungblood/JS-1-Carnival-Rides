//DO NOT RENAME THESE VARIABLES, THEY ARE USED TO RENDER THINGS
//assigning lines 4-7 boolean variable value of false
//assigning lines 8-11 boolean variable value of true
let ride1PowerOn = false;
let ride2PowerOn = false;
let ride3PowerOn = false;
let ride4PowerOn = false;
let greenWireConnected = true;
let yellowWireConnected = true;
let redWireConnected = true;
let waterIsOn = true;
//Everything below is fair game for you to power on the rides

//assuming power to ride one is off(line 15 means the same thing as power ride one is off)
ride1PowerOn = false;

//greenWireConnected is boolean expression in if statement
//ride1PowerOn = true is the same thing as ride one works which means the same thing as power being applied to ride1
//Ride 1 works when:
// green wire is connected
if (greenWireConnected) {
  //when green wire is connected, when in english is a if in javascript, what follows when is the expression for if
  ride1PowerOn = true; //this line means ride1 works, ride1 works when power is applied, when power on means power is applied
}

//Ride 2 works when
//green and yellow wires are connected
ride2PowerOn = false;
if (greenWireConnected && yellowWireConnected) {
  ride2PowerOn = true;
}

//Ride 3 works when:
// green and red wires are connected
// water is on
// yellow wire is not connected
ride3PowerOn = false;
if (
  //when:
  // green and red wires are connected
  // and
  // water is on
  // and
  // yellow wire is not connected
  // lines 40 through 43 are the conditions to evaluate, current condtions evaluate(equals) false
  greenWireConnected &&
  redWireConnected &&
  waterIsOn &&
  !yellowWireConnected // !yellowWireConnected equals not true same thing as false
  // if one condtion is false the whole thing is false
  // then we dont execute the statement
) {
  //line 49 is the action to perform only if the value between the parenthese is true
  //ride3PowerOn = true; is the same as ride 3 works
  ride3PowerOn = true; //action to perform
}

//Ride 4 has power when:
//red wire is connected
//ride 4 has power is the same thing as the power for ride 4 is on which also means red 4 power on equals true
ride4PowerOn = false;
if (redWireConnected) {
  ride4PowerOn = true;
}

//Ride 4 is a slot machine
//if a 1 is rolled it should return "star"
//if a 2 is rolled it should return "car"
//if a 3 is rolled it should return "pot of gold"
//if a 4 is rolled it should return "clover"
//if a 5 is rolled it should return "bowling ball"
//if a 6 is rolled it should return "tiger"
//if a 7 is rolled it should return "seven"
//
// we are implementing in code the logic in lines 65 -72
//in other words what we want to do as written in lines 66-72 as english and convert that to javascript statements
//
//rolledNumber is a variable that contains what was rolled
//lines 66-72 are saying if the rolled number( value in rolledNumber variable) equals the number 1-7
//we should return the words mentioned at the end of line 66-72
//
//in other words if the rolled number is a 1 we return the word star

function ride4SlotMachine(rolledNumber) {
  //this switch statement performs the actions in lines 66-72
  //the purpose of the switch is to see what the value of the rolled number is (the variable rolledNumber between the parenthesis at the end of the word swtich)
  switch (
    rolledNumber //this means what is the value of the rolledNumber variable
  ) {
    case 1: //if the value of the rolled number variable is 1
      return "star"; //ride4slotMachine function returns the word "star" and exit the function
      break; //break gets us has control out of the switch statement (in other words we dont look at the remaining case statements)
    case 2:
      return "car";
      break;
    case 3:
      return "pot of gold";
      break;
    case 4:
      return "clover";
      break;
    case 5:
      return "bowling ball";
      break;
    case 6:
      return "tiger";
      break;
    case 7:
      return "seven";
      break;
    default: //this is executed if the value if the value is not 1-7, in other words default handles the scenerio where a case doesn't have a value
    // code block
  }
}
