import flatpickr from "flatpickr";
import iziToast from "izitoast";
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;
const btn = document.querySelector('button[data-start]')
btn.disabled=true;
btn.classList.add('is-disabled');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0];
    if (selectedTime > new Date() ) {
      userSelectedDate = selectedTime;
      btn.disabled = false;
      btn.classList.remove('is-disabled');
    } else {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
        timeout: 3000,
      });
    }
  },
}
flatpickr('#datetime-picker', options);

btn.addEventListener('click', onBtnClick)

function onBtnClick(){
  btn.disabled = true;
  btn.classList.add('is-disabled');
  const intervalId = setInterval(()=>{
    const timeCounter = userSelectedDate - new Date();
    const timeLeft = convertMs(timeCounter);
    updateTimerInterface(timeLeft);

    if (timeCounter <= 1000) {
      clearInterval(intervalId);
    }

  },1000)
   
}

function updateTimerInterface({ days, hours, minutes, seconds }){
  const strDays = `${addLeadingZero(days)}`;
  const strHours = `${addLeadingZero(hours)}`;
  const strMinutes = `${addLeadingZero(minutes)}`;
  const strSeconds = `${addLeadingZero(seconds)}`;

  spanDays.textContent = strDays;
  spanHours.textContent = strHours;
  spanMinutes.textContent = strMinutes;
  spanSeconds.textContent = strSeconds;

}

function addLeadingZero(value){
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}