//-------------STOPWATCH--------------

let hours = 0;
let minutes = 0;
let seconds = 0;
let displayTime = document.querySelector('#display');
let titleStatus = document.querySelector('#title');
let timer = null;

let navStopwatch = document.querySelector('.stopwatch1');


function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = String(hours).padStart(2, "0"); // it ensure 2 digit on hour ex: not 5 its 05
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  displayTime.innerHTML = `${h}:${m}:${s}`; // it change inner html 
}


document.querySelector("#start").addEventListener("click", () => {
  //if check previous any timer is active
  if (timer === null)
    timer = setInterval(stopwatch, 1000);
  titleStatus.innerHTML = "Started";

})

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(timer);   //method in JavaScript stops a repeating timer that was previously started using setInterval()
  timer = null;
  titleStatus.innerHTML = "Paused";
})

document.querySelector('#reset').addEventListener('click', () => {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  timer = null;
  displayTime.innerHTML = "00:00:00";
  titleStatus.innerHTML = "Stop Watch";

})

//-------------TIMER--------------

let timerhour = 0;
let timerminute = 0;
let timersecond = 0;

let timerInterval = null;

const hourInput = document.querySelector('#timer-hours');
const minuteInput = document.querySelector('#timer-minutes');
const secondInput = document.querySelector('#timer-seconds');


function timerLogic() {

  if (timerhour === 0 && timerminute === 0 && timersecond === 30)
    document.querySelector('.timer-container').style.boxShadow = "0 4px 8px rgb(229, 208, 25)";
  if (timerhour === 0 && timerminute === 0 && timersecond === 10)
    document.querySelector('.timer-container').style.boxShadow = "0 4px 8px rgb(221, 47, 27)";

  if (timerhour === 0 && timerminute === 0 && timersecond === 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    return;
  }
  if (timersecond > 0)
    timersecond--;
  else {
    timersecond = 59;
    if (timerminute > 0)  // this for prevent it from going -ve
      timerminute--;
    else {
      timerminute = 59;
      timerhour--;
    }
  }
  updateTimerDisplay();
}

const timerDisplay = document.querySelector("#display-timer");
const startTimer = document.querySelector("#start-timer");
const stopTimer = document.querySelector("#stop-timer");
const resetTimer = document.querySelector("#reset-timer");

function updateTimerDisplay() {
  let h = String(timerhour).padStart(2, "0");
  let m = String(timerminute).padStart(2, "0");
  let s = String(timersecond).padStart(2, "0");

  timerDisplay.innerHTML = `${h}:${m}:${s}`;
}

startTimer.addEventListener('click', () => {
  document.querySelector('#title-timer').innerHTML = "Started";
  if (timerhour === 0 && timerminute === 0 && timersecond === 0) {
    timerhour = Number(hourInput.value);  // convert string in to number
    timerminute = Number(minuteInput.value);
    timersecond = Number(secondInput.value);

    updateTimerDisplay();
  }
  if (timerInterval === null) {
    timerInterval = setInterval(timerLogic, 1000);
  }

});

document.querySelector('#stop-timer').addEventListener('click', () => {
  clearInterval(timerInterval);   //method in JavaScript stops a repeating timer that was previously started using setInterval()
  timerInterval = null;
  document.querySelector('#title-timer').innerHTML = "Paused";
})

document.querySelector('#reset-timer').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;

  timerhour = 0;
  timerminute = 0;
  timersecond = 0;

  updateTimerDisplay();

  document.querySelector('#title-timer').innerHTML = "Timer";
})



//-------------DOB CALCULATOR--------------

const dateInput = document.querySelector("#dob");
const calculateBtn = document.querySelector("#calculate-age");
const resultDob = document.querySelector("#result-dob");


const currDate = new Date(); // this is user current date


calculateBtn.addEventListener("click", () => {

  // if date ios empty
  if (dateInput.value === "") {
    resultDob.innerHTML = "Please Enter Your DOB";
    resultDob.style.color = "red";
    return;
  }


  const birthDate = new Date(dateInput.value);   // user DOB

  //if date is in future
  if (birthDate > currDate) {
    resultDob.innerHTML = "DOB cannot be in the future";
    resultDob.style.color = "red";
    return;
  }


  let years = currDate.getFullYear() - birthDate.getFullYear();
  let months = currDate.getMonth() - birthDate.getMonth();
  let days = currDate.getDate() - birthDate.getDate();


  // handle negetive value eg today is 15 sep and user DOB is 20 sep so 15-20=-5
  if (days < 0) {
    months--;

    const prevMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 0);
    days += prevMonth.getDate();

  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDob.innerHTML = `Your Age is ${years} Years, ${months} Months, and ${days} Days`;
  resultDob.style.color = "#e7dd57"

})





//-------------NAV SWITCH--------------

//  select pages
const stopwatchpage = document.querySelector('#stopwatchPage');
const timerpage = document.querySelector('#timerpage');
const dobcalpage = document.querySelector('#dobpage');

// select nav
const stopwatchNav = document.querySelector('#stopwatchNav');
const timerNav = document.querySelector('#timerNav');
const dobNav = document.querySelector('#dobNav');

//select all nav
const allNav = document.querySelectorAll('.nav-item');



//function to change pages
function showPages(nav, page) {

  //hide all pages
  stopwatchpage.style.display = "none";
  timerpage.style.display = "none";
  dobcalpage.style.display = "none";

  //remove all active class from nav
  allNav.forEach(i => {
    i.classList.remove("active");
  });

  // Show selected page
  page.style.display = "block";

  //add active class
  nav.classList.add('active');
}

//stopwatch
stopwatchNav.addEventListener('click', (e) => {
  e.preventDefault();
  showPages(stopwatchNav, stopwatchpage);
})

timerNav.addEventListener('click', (e) => {
  e.preventDefault();
  showPages(timerNav, timerpage);
})

dobNav.addEventListener('click', (e) => {
  e.preventDefault();
  showPages(dobNav, dobcalpage);
})



