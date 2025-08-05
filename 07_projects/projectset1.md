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
