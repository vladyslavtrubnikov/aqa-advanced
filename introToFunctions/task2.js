function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const user1 = isAdult(17);

const user2 = isAdult(25);

console.log('Чи є користувач повнолітнім?', user1);

console.log('Чи є користувач повнолітнім?', user2);
