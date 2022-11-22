import startGame from '../index.js';
import getRandomNumber from '../Random.js';

const DESCRIPTION = 'What is the result of the expression?';

const OPERATIONS = ['+', '-', '*'];

const calc = (operand1, operand2, result) => {
    switch (result) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
    }
  };

const getData = () => {
const operand1 = getRandomNumber(1, 30);
const operand2 = getRandomNumber(1, 30);
const operation = OPERATIONS[Math.floor(Math.random()*OPERATIONS.length)];
const question = `${operand1} ${operation} ${operand2}`;
const correctAnswer = String(calc(operand1, operand2, operation));
return [question, correctAnswer];
};
export default () => startGame(DESCRIPTION, getData);
