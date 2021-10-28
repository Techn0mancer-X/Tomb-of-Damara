function caveEntrance() {
  let message =
    'As you enter the cave ,you realize that a torch is not required as you can see perfectly fine..\n'
  message +=
    'as you enter the cave you see 2 exits on going west, and one going west.'
  return message
}

function caveEntranceExits() {
  let message = 'go left. http://localhost:3000/room2\n'
  message += 'go right. http://localhost:3000/rooms3\n'
  return message
}

function room2() {
  let message = 'Description.\n'
  message += 'more words'
  return message
}

function room2Exits() {
  let message = 'list exits.\n'
  message += 'provide endpoints for exits'
  // http://localhost:3000/caveentrance and room4
  return message
}

function room3() {
  let message = 'Description.\n'
  message += 'more words'
  return message
}

function room3Exits() {
  let message = 'list exits.\n'
  message += 'provide endpoints for exits'
  // http://localhost:3000/caveentrance and room4
  return message
}

function room4() {
  let message = 'Description.\n'
  message += 'more words'
  return message
}

function room4Exits() {
  let message = 'list exits.\n'
  message += 'provide endpoints for exits'
  // http://localhost:3000/caveentrance and room4
  return message
}

function room5() {
  let message = 'Description.\n'
  message += 'more words'
  return message
}

function room5Exits() {
  let message = 'list exits.\n'
  message += 'provide endpoints for exits'
  // http://localhost:3000/caveentrance and room4
  return message
}

module.exports = {
  caveEntrance,
  caveEntranceExits,
  room2,
  room2Exits,
  room3,
  room3Exits,
  room4,
  room4Exits,
  room5,
  room5Exits,
}

// let monsterLocation

// function pickItemLocation(itemLocation) {
//   return itemLocation[Math.floor(Math.random) * rooms.length]
// }

// console.log(itemLocation)
