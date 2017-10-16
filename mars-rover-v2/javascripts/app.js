var direction = ["n", "s", "e", "o" ];
var rover = {
  direction: 'n',
  position: [2,1],
  travelLog: [],
} 
var mars = [
  ["0 0", "0 1", "0 2", "0 3"],
  ["1 0", "1 1", "1 2", "1 3"],
  ["2 0", "2 x 1", "2 2", "2 3"],
  ["3 0", "3 1", "3 2", "3 3"],
]

// ======================

// ======================
function turnLeft(rover){
   switch(rover.direction){
     case 'n':
      rover.direction = 'w';
      break;
      case 'w':
      rover.direction = 's';
      break;
      case 's':
      rover.direction = 'e';
      break;
      case 'e':
      rover.direction = 'n';
      break; 
   }
  console.log(rover.direction);
}

function turnRight(rover){
  switch(rover.direction ){
    case 'n':
     rover.direction = 'e';
     break;
     case 'w':
     rover.direction = 'n';
     break;
     case 's':
     rover.direction = 'w';
     break;
     case 'e':
     rover.direction = 's';
     break; 
  }
  console.log(rover.direction);
} 

function moveForward(rover){
  rover.travelLog.push(rover.position.concat());
  switch(rover.direction){
    case 'n':
    rover.position[0]--; 
    break;
    case 's':
    rover.position[0]++;
    break;
    case 'w':
    rover.position[1]--;
    break;
    case 'e':
    rover.position[1]++;
    break;
  }
  if (rover.position[0] = -1){
    rover.position[0]= 9;
  } else if (rover.position[1] = -1){
    rover.position[1] = 9;
  } else if (rover.position[0] = 10) {
    rover.position[0] = 0;
  } else if (rover.position[1] = 10){
    rover.position[1] = 0;
  }
  console.log(rover.position)
  console.log(rover.travelLog);
}
function moveBackward(rover){
  rover.travelLog.push(rover.position.concat());
  switch(rover.direction){
    case 'n':
    rover.position[0]++;
    break;
    case 's':
    rover.position[0]--;
    break;
    case 'w':
    rover.position[1]++;
    break;
    case 'e':
    rover.position[1]--;
    break;

  }
  if (rover.position[0] = -1){
    rover.position[0]= 9;
  } else if (rover.position[1] = -1){
    rover.position[1] = 9;
  } else if (rover.position[0] = 10) {
    rover.position[0] = 0;
  } else if (rover.position[1] = 10){
    rover.position[1] = 0;
  }
  console.log(rover.position);
  console.log(rover.travelLog);
}

var orders = 'lrfrf'
function orderOrder(orders){
  for(i = 0; i <= orders.length; i++){
    order = orders[i];
    switch(order){
        case 'l':
        turnLeft(rover);
        break;
        case 'r':
        turnRight(rover);
        break;
        case 'f':
        moveForward(rover);
        break;
        case 'b':
        moveBackward(rover);
        break;
    }
  } 
}


