const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]; // global array - any function will always have access to this variable

// with ternary operator and the 'includes' array method
function canWeDeliver(zipcode) {
  return deliveryAreaZipCodes.includes(zipcode) ? "You're in our delivery zone!" : "Sorry, we can't deliver to that address";
}

// without the ternary operator
function canWeDeliver(zipcode) {
  if (deliveryAreaZipCodes.includes(zipcode) == true) {
    return "You're in our delivery zone!";
  } else {
    return "Sorry, we can't deliver to that address";
  }
}

// foreach loop
function canWeDeliver(zipcode) {
  let ans = "Sorry, we can't deliver to that address";
  deliveryAreaZipCodes.forEach(x => { // loops over the array - compares each element to your zipcode argument. If it does match, overwrite the ans variable with the new message. 
    if (x == zipcode) { 
      ans = "You're in our delivery zone!";
    }
  })
  return ans; // will return the original message or the new message if the variable got overwritten
}

// Taylor's solution
function canWeDeliver(zipcode) {
  zipcode = deliveryAreaZipCodes; // Here, you're reassigning the given argument to be the same as deliveryAreaZipCodes, so you're saying "My given variable that used to be 85205, I'm going to change that to be an arry that equals [85205, 85204, 85203, 85213, 85206] instead"
  if(zipcode === true){ // if [85205, 85204, 85203, 85213, 85206] strict equals true
    return 'yes, we can deliver';
  }else{ // if [85205, 85204, 85203, 85213, 85206] does not strict equal true
    return 'We cannot deliver'; 
  }
}
