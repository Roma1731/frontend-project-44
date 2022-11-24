import startGame from '../index.js';
import getRandomNumber from '../Random.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) if (number % i === 0) return false;
  return number > 1;
};

const getData = () => {
  const question = getRandomNumber(1, 103);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(DESCRIPTION, getData);
