import startGame from '../index.js';
import getRandomNumber from '../Random.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % 1 === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const question = getRandomNumber(1, 103);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(DESCRIPTION, getData);
