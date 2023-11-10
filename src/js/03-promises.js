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
// console.log(createPromise(1, 1000));
const form = document.querySelector('.form');
// const initDelayField = document.querySelector('input[name="delay"]');
// const stepField = document.querySelector('input[name="step"]');
// const amountField = document.querySelector('input[name="amount"]');
// const createPromisesBtn = document.querySelector('button[type="submit"]');

// console.log(form, initDelayField, stepField, amountField, createPromisesBtn);

// const amount = amountField.value;
// const initDelay = initDelayField.value;
// const step = stepField.value;

form.addEventListener('input', onFormInput);

const userOptions = {};

function onFormInput(e) {
const formData = new FormData(form);
formData.forEach((value, key) => {
  userOptions[key] = value;
});
// console.log(userOptions);
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
e.preventDefault();
const {delay : initDelay, step, amount} = userOptions;
// console.log(initDelay, step, amount);

  for (let position = 0; position < Number(amount); position += 1) {
    // console.log(position);
    const delay = Number(initDelay) + position * Number(step);
    // console.log(delay);
    createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position + 1} in ${delay}ms`);
    });
  }
}



