const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = (sec) => {
  const startTime = new Date();
  const stopTime = startTime.setSeconds(startTime.getSeconds() + sec);
  const countDown = setInterval(function () {
    const now = new Date().getTime();
    const remain = stopTime - now;
    var hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((remain % (1000 * 60)) / 1000);
    timerEl.innerHTML =
      getZero(hours) + ":" + getZero(min) + ":" + getZero(sec);
    if (remain < 0) {
      clearInterval(countDown);
      timerEl.innerHTML = "hh:mm:ss";
    }
  }, 1000);
};
function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}
inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  createTimerAnimator(seconds);
  inputEl.value = "";
});
