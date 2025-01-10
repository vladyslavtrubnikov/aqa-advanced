function timerText(text, time) {
  const intervalId = setInterval(() => {
    console.log(`Кожні 5 секунд вам буде приходити ${text}`);
  }, time);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Повідомлень більше немає.');
  }, 20000);
}

timerText('Нове повідомлення', 5000);
