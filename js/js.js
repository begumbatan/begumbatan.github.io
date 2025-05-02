//const zerobutton = document.getElementById('zerobutton');
//const onebutton = document.getElementById('onebutton');
//const twobutton = document.getElementById('twobutton');
//const threebutton = document.getElementById('threebutton');
//const fourbutton = document.getElementById('fourbutton');
//const fivebutton = document.getElementById('fivebutton');
//const sixbutton = document.getElementById('sixbutton');
//const sevenbutton = document.getElementById('sevenbutton');
//const eightbutton = document.getElementById('eightbutton');
//const ninebutton = document.getElementById('ninebutton');

//zerobutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '3';
//});
//onebutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '4';
//});
//twobutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '5';
//});
//threebutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '6';
//});
//fourbutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '7';
//});
//fivebutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '8';
//});
//sixbutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '9';
//});
//sevenbutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '0';
//});
//eightbutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '1';
//});
//ninebutton.addEventListener('click', () => {
//  document.getElementById('output').textContent = '2';
//});
const clearbutton = document.getElementById('clear');

//phone number display
const phonedisp =[]; 
for (let i = 0; i < 10;i++) {
  phonedisp.push(document.getElementById('d'+ i));
}

let currentIndex= 0;
//add 3 to each digit
function cipherdigit(n) {
  return (n +3) % 10;
}
//gets button id and changes to the cipher one
for (let i = 0; i <= 9;i++) {
  const numberbuttons = [
    "zerobutton", "onebutton","twobutton", "threebutton","fourbutton",
    "fivebutton","sixbutton","sevenbutton","eightbutton", "ninebutton"
  ][i];
  
const button =document.getElementById(numberbuttons);
  button.addEventListener('click',() => {
    if (currentIndex < 10){
      const ciphered = cipherdigit(i);
      phonedisp[currentIndex].textContent =ciphered;
      currentIndex = currentIndex + 1;
    }
  });
}

//clear button
clearbutton.addEventListener('click', () => {
  for (let i = 0; i < 10; i++){
    phonedisp[i].textContent ='_';
  }
  currentIndex = 0;
});

