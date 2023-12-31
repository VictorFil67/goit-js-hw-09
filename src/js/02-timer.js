import flatpickr from "flatpickr";
// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
const ref = {
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
}

let selDate = null;
ref.startBtn.disabled = true; 
ref.startBtn.addEventListener('click', onStartBtnClick);
function onStartBtnClick() {
    options.start();
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    intervalId: null,

    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()){
            Notiflix.Notify.failure('Please choose a date in the future');
            // alert("Please choose a date in the future");
            return;
        }
        selDate = selectedDates[0];
        ref.startBtn.disabled = false;
    },

    start() {
        this.intervalId = setInterval(() => {
            const diff =  selDate.getTime() - Date.now(); 
            // console.log(diff);
            if (diff < 0) {
                this.stop();  
                return;
              }

              let { days, hours, minutes, seconds } = this.convertMs(diff);
            //   console.log(days, hours, minutes, seconds);
              ref.days.textContent = this.addLeadingZero(days);
              ref.hours.textContent = this.addLeadingZero(hours);
              ref.minutes.textContent = this.addLeadingZero(minutes);
              ref.seconds.textContent = this.addLeadingZero(seconds);

                    }, 1000);
                    ref.startBtn.disabled = true; 
    },

    stop() {
        clearInterval(this.intervalId);
      },

    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      },
    
    addLeadingZero(value) {
        return String(value).padStart(2, '0');
      },

};

flatpickr("#datetime-picker", options);