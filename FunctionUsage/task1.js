function handleNum(number, handleEven, handleOdd) {

  if (number % 2 === 0) {
    handleEven();
  } else {
    handleOdd();
  }
}

function handleEven() {
  console.log('Number is Even');
}

function handleOdd() {
  console.log('Number is Odd');
}

handleNum(8, handleEven, handleOdd);
handleNum(5, handleEven, handleOdd);
