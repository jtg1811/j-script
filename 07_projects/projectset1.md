# projects related to DOM

## project link

## [Click here](https://stackblitz.com/edit/stackblitz-starters-m1xd2ux2?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)

## Solution code

## project 1 

``` javascript 

console.log("hello jeet")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2 --> BMI calculator

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  results.innerHTML = ' ';
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'enter valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'enter valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`;

    const bmiValue = parseFloat(bmi);
    const textMsg = document.createElement('h2');
    textMsg.innerHTML = `BMI: ${bmi}`;
    if (bmiValue < 18.6) {
      textMsg.innerHTML = 'under weight';
      textMsg.style.backgroundColor = 'orange';
    } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
      textMsg.innerHTML = 'normal range';
      textMsg.style.backgroundColor = 'green';
    } else {
      textMsg.innerHTML = 'over weight';
      textMsg.style.backgroundColor = 'red';
    }
    results.appendChild(textMsg);
  }
});
