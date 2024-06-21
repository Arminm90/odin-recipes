const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.classList.add('redText');
redText.textContent = "Hey i'm red!";
redText.style.color = 'red';

container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.classList.add('blueText');
blueText.textContent = "I'm a blue h3";
blueText.style.color = 'blue';

container.appendChild(blueText);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

container.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(p);

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World!');

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert('Hello World!');
// });

// function alertFunction() {
//   alert('YAY! YOU DID IT!');
// }

function alertFunction() {
  alert('YAY! YOU DID IT!');
}

// const btn = document.querySelector('#btn');
// btn.onclick = alertFunction;

// btn.addEventListener('click', function (e) {
//   console.log(e.target);
// });

// btn.addEventListener('click', function (e) {
//   console.log(e.target);
// });

// btn.addEventListener('click', function (e) {
//   e.target.style.background = 'blue';
// });

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
