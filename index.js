//DO NOT RENAME THESE VARIABLES, THEY ARE USED TO RENDER THINGS
let ride1PowerOn = false;
let ride2PowerOn = false;
let ride3PowerOn = false;
let ride4PowerOn = false;
let greenWireConnected = true;
let yellowWireConnected = true;
let redWireConnected = true;
let waterIsOn = true;
//Everything below is fair game for you to power on the rides

//Ride 1 works when:
// green wire is connected
ride1PowerOn = false;

if (greenWireConnected) {
  ride1PowerOn = true;
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
function ride4SlotMachine(rolledNumber) {
  return "nothing";
}
