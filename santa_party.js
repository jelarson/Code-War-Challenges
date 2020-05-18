// https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304/train/javascript

function getAttendees(peopleInvited, responses) {
  let guestList = [];
  let responseNames = [];
  responses.forEach((response) => {
    responseNames.push(response.name);
  });
  responses.forEach((response) => {
    if (response.response === "accepted") {
      guestList.push(response.name);
    }
  });
  peopleInvited.forEach((invite) => {
    if (responseNames.includes(invite) === false) {
      guestList.push(invite);
    }
  });
  return guestList;
}

console.log(
  getAttendees(
    ["Easter Bunny", "Tooth Fairy", "Frosty the Snowman", "Jack Frost"],
    [
      { name: "Easter Bunny", response: "declined" },
      { name: "Jack Frost", response: "declined" },
      { name: "Tooth Fairy", response: "accepted" },
    ]
  )
);

// getAttendees( ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'] ,
//    [
//      {name: 'Easter Bunny', response: 'declined'},
//      {name: 'Jack Frost', response: 'declined'},
//      {name: 'Tooth Fairy', response: 'accepted'}
//    ] );// => returns ['Tooth Fairy', 'Frosty the Snowman']

// top solution

function getAttendees(peopleInvited, responses) {
  responses.forEach(function (val) {
    if (val.response === "declined")
      peopleInvited.splice(peopleInvited.indexOf(val.name), 1);
  });
  return peopleInvited;
}
