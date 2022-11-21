import readlineSync from 'readline-sync';
import getRandomNumber from '../Random.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(DESCRIPTION);

const isEven = (number) => number % 2 === 0;
const ROUNDS_COUNT = 3;

const getData = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const iter = (round) => {
  if (round === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const [question, correctAnswer] = getData();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  console.log('Correct!');

  iter(round - 1);
};

iter(ROUNDS_COUNT);
export default getData;
