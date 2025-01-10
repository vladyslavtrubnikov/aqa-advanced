function timerText(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}

timerText('Нове повідомлення', 3000);

console.log();
