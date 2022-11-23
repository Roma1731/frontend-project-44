import startGame from '../index.js';
import getRandomNumber from '../Random.js';

const DESCRIPTION = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }
  return progression;
};
const getData = () => {
  const start = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const missingElement = getRandomNumber(0, PROGRESSION_LENGTH - 1);
  const progression = getProgression(start, step, PROGRESSION_LENGTH);
  const correctAnswer = progression[missingElement].toString();
  progression[missingElement] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => startGame(DESCRIPTION, getData);
