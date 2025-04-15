var triviaBtn = document.querySelector('#js-trivia').addEventListener('click', getTrivia);
var answerBtn = document.querySelector('#js-answer').addEventListener('click', getAnswer);
var nameBtn = document.querySelector('#js-name').addEventListener('click', getName);

var endpointTrivia = "https://uselessfacts.jsph.pl/api/v2/facts/random";
var endpointAnswer = "https://randomuser.me/api?nat=US";
var endpointName = "https://randomuser.me/api?nat=US"

let currentTrivia = {
    text: "",
};
let currentAnswer ={
    fact:"",
    
}

let currentName = {
    name: "",
}
async function getTrivia(){
    try{
        const response = await fetch(endpointTrivia);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayTrivia(json.text);
        currentTrivia.text = json.text;
    }
    catch(err){
        console.log(err);
        alert('Failed to get fact');
    }
}

async function getAnswer() {
    try {
      const responseAnswer = await fetch(endpointAnswer);
      if (!responseAnswer.ok) {
        throw Error(responseAnswer.statusText);
      }
      const json = await responseAnswer.json();
      
      // Extract the street number from the location object
      const streetNumber = json.results[0].location.street.number; // Access the street number
      displayAnswer(streetNumber);
      currentAnswer.fact = streetNumber;
    } catch (err) {
      console.log(err);
      alert('Failed to get number');
    }
  }
  

async function getName(){
    try{
        const responseName = await fetch(endpointName);
        if(!responseName.ok){
            throw Error(responseName.statusText);
        }
        const json = await responseName.json();
    const fullName = `${json.results[0].name.first} ${json.results[0].name.last}`;
    displayName(fullName);
    currentName.name = fullName;
    }
    catch(err){
        console.log(err);
        alert('Failed to get name');
    }
}

function displayTrivia(trivia){
    const triviaText = document.querySelector('#js-trivia-text');
    triviaText.textContent = trivia;
}

function displayAnswer(answer){
    const answerText = document.querySelector ('#js-answer-text');
    answerText.textContent = answer;
}

function displayName(name){
    const nameText = document.querySelector ('#js-name-text');
    nameText.textContent = name;
}
getTrivia();
getAnswer();
getName();