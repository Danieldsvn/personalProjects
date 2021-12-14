// Creates basic HTML elements
let header = document.createElement('header');
let title = document.createElement('h1');
title.innerText = 'Formula 1 Racing';
let body = document.querySelector('body');
body.appendChild(header);
header.appendChild(title);
let main = document.createElement('main');
body.appendChild(main);
let footer = document.createElement('footer');
body.appendChild(footer);
//Creates cars elements
let car1 = document.createElement('img');
car1.id = 'redCar';
car1.src = 'F1redCar.png';
let car2 = document.createElement('img');
car2.id = 'greenCar';
car2.src = 'F1greenCar.png';
main.appendChild(car1);
main.appendChild(car2);
