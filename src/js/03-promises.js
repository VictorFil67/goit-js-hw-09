import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    });
}

const form = document.querySelector('.form');

form.addEventListener('input', onFormInput);

const userOptions = {};

function onFormInput(e) {
const formData = new FormData(form);
formData.forEach((value, key) => {
  userOptions[key] = value;
});
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
e.preventDefault();
const {delay : initDelay, step, amount} = userOptions;

  for (let position = 0; position < Number(amount); position += 1) {
    const delay = Number(initDelay) + position * Number(step);
    createPromise(position, delay)
    .then(({ position, delay }) => {
      // console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      // console.log(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
    });
  }
}



