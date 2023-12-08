const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElemnt = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const counterTimer = document.querySelector(".counterTimer")
const heading = document.querySelector("h1")
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth()+1).padEnd(2, "0"),
    yyyy = now.getFullYear();

  now = `${mm}/${dd}/${yyyy}`;
    console.log(now)
  const enteredDay = prompt("Enter Day : ").padStart(2, "0");
  const enteredMonth = prompt("Entered Month : ").padStart(2, "0");

  if(enteredDay > 0 && enteredDay<=31 && enteredMonth>0 &&enteredMonth<=12){
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
    console.log(targetDate)
    console.log(targetDate<now)
  if (targetDate < now) {
    targetDate = `${enteredMonth}/${enteredDay}/${yyyy+1}`;
    console.log(`${enteredMonth}/${enteredDay}/${yyyy+1}`)
  }
  let timerId = setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const difference = timer - today;

    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElemnt.innerText = leftMinute;
    secondsElement.innerText = leftSecond;
    if(difference<0){
        counterTimer.style.display = "none"
        heading.innerText = "Time's Up"
        clearInterval(timerId)
    }
  }, 1000);
  }else{
    counterTimer.style.display = "none"
    heading.innerText = "Entered wrong month/day"
  }

};

timerFunction();
