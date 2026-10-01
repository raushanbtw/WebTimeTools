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
    timer = setInterval(stopwatch, 1000);//1000
  titleStatus.innerHTML = "Started";

})

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(timer);
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







//-------------DOB CALCULATOR--------------



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



