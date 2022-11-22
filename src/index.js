import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (DESCRIPTION, getData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(DESCRIPTION);

  const iter = (round) => {
    if (round === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const [question, correctAnswer] = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');

    iter(round - 1);
  };
  iter(ROUNDS_COUNT);
};
