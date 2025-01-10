function checkOrder(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty';
  } else if (available < ordered) {
    return 'Your order is too large, we don’t have enough goods.';
  } else {
    return 'Your order is accepted';
  }
}

console.log(checkOrder(22, 45));

console.log(checkOrder(77, 0));

console.log(checkOrder(10, 6));
