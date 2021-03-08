'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';

document.querySelector('.number').textContent = 17;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
