import startGame from '../index.js';
import getRandomNumber from '../Random.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const calc = (operand1, operand2) => {
  if (!operand2) {
    return operand1;
  }
  return calc(operand2, operand1 % operand2);
};

const getData = () => {
  const operand1 = getRandomNumber(1, 50);
  const operand2 = getRandomNumber(1, 50);
  const question = `${operand1} ${operand2}`;
  const correctAnswer = String(calc(operand1, operand2));
  return [question, correctAnswer];
};

export default () => startGame(DESCRIPTION, getData);
