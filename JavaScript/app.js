// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

// ======================
function turnLeft(rover){
  // console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;

    case "W":
    rover.direction = "S";
    break;

    case "S":
    case "s":
    rover.direction = "E";
    break;

    // case "E":
    // case "e":
    default:
    rover.direction = "N";
    break;
  }
}

function turnRight(rover) {
  if(rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E"){
    rover.direction = "S";
  } else if (rover.direction === "S"){
    rover.direction = "W";
  } else {
    rover.direction = "N"
  }
}

// firstrow

// function turnRight(rover){
//   console.log("turnRight was called!");
// } 

function moveForward(rover){
  //console.log("moveForward was called")
  switch(rover.direction) {
    case "N":
    if (rover.y > 0) {
      rover.y--;
    }
    break;

    case "W":
    if (rover.x > 0){
      rover.x -= 1;
    }
    break;

    case "S":
    if (rover.y < 9) {
      rover.y++;
    }
    break;

    case "E":
    if (rover.x < 9) {
      rover.x += 1;
    }
    break; 
  }
  createLog(rover)
}

function go(rover, commands) {
  for(i = 0; i < commands.length; i++){
    switch(commands[i]) {
      case "f":
      moveForward(rover);
      break;

      case "r":
      turnRight(rover);
      break;

      case "l":
      turnLeft(rover);
      break;

      case "b":
      moveBackward(rover);
      break;

      default:
      console.log("This command is not valid", commands[i])
      
    }
  }

}

function createLog(rover){
  rover.travelLog.push ([rover.x, rover.y])
}

function moveBackward(rover){
  turnLeft(rover);
  turnLeft(rover);
  moveForward(rover);
  turnLeft(rover);
  turnLeft(rover);
}

function moveBackwardLameWay(rover) {
  switch(rover.direction) {
    case "N":
    if (rover.y < 9) {
      rover.y--;
    }
    break;
    
    case "S":
    if (rover.y > 0) {
      rover.y++;
    } 
    break;

    case "W":
    if (rover.x < 9) {
      rover.x++;
    }
    break;

    case "E":
    if (rover.x > 0) {
      rover.x--;
    }
    break;
  }
}