const newBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-tweet');
const dinoNameBtn = document.querySelector('#js-show-name');

const questionText = document.querySelector('#js-quote-text');
const answerText = document.querySelector('#js-answer-text');
const dinoNameText = document.querySelector('#js-dino-text');

const triviaEndpoint = "https://opentdb.com/api.php?amount=1&category=17&type=multiple";

let current = {
  question: "",
  answer: ""
};

newBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', () => displayAnswer(current.answer));
dinoNameBtn.addEventListener('click', getDinoName);

async function getQuote() {
  try {
    const response = await fetch(triviaEndpoint);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    const trivia = data.results[0];

    // Decode HTML entities
    const parser = new DOMParser();
    const question = parser.parseFromString(trivia.question, "text/html").body.textContent;
    const answer = parser.parseFromString(trivia.correct_answer, "text/html").body.textContent;

    current.question = question;
    current.answer = answer;

    displayQuote(question);
    answerText.textContent = ''; // Clear previous answer
  } catch (err) {
    console.error(err);
    alert('Failed to fetch trivia!');
  }
}

function displayQuote(quote) {
  questionText.textContent = quote;
}

function displayAnswer(answer) {
  answerText.textContent = answer;
}

async function getDinoName() {
  try {
    const response = await fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs/random/name");
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    // If you want to display it somewhere, make sure #js-dino-text exists in your HTML
    if (dinoNameText) {
      dinoNameText.textContent = json.name;
    } else {
      alert(`Dino name: ${json.name}`);
    }
  } catch (err) {
    console.error(err);
    alert("Failed to fetch dino name");
  }
}

// Load a trivia question on initial page load
getQuote();
