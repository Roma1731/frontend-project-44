import startGame from '../index.js';
import getRandomNumber from '../Random.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const sqrtnumber = Math.floor(Math.sqrt(number));
  let prime = number !== 1;
  for (let i = 2; i < sqrtnumber + 1; i += 1) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const getData = () => {
  const question = getRandomNumber(1, 103);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(DESCRIPTION, getData);
