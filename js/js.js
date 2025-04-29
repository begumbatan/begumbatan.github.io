const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const stopButton = document.getElementById('stop');

const digits = [];
for (let i = 0; i < 10; i++) {
  digits.push(document.getElementById('digit' + i));
}
//https://stackoverflow.com/questions/19445408/how-to-restrict-user-to-type-10-digit-numbers-in-input-element
//  digits.push(document.getElementById('digit' + i));

let random;

function rotate() {
    random = setInterval(() => {
    for (let i = 0; i < 10; i++) {
      digits[i].textContent = Math.floor(Math.random() * 10);
    }
  }, 100);
}
//https://stackoverflow.com/questions/72725263/what-will-math-floormath-random-10-1-do
//      digits[i].textContent = Math.floor(Math.random() * 10);

stopButton.addEventListener('click', () => {
  clearInterval(random); 
});

yesButton.addEventListener('click', () => {
  alert("Nice!");
});

noButton.addEventListener('click', () => {
    rotate();
});

rotate();
