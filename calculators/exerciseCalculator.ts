interface TrainingMetrics {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  ratingExplanation: string;
}

const calculateExercises = (data: number[], target: number): TrainingMetrics => {
  const periodLength = data.length;
  const trainingDays = data.filter((day: number) => day > 0).length;
  const average = data.reduce((a: number, b: number) => a + b, 0) / periodLength;
  const success = average >= target;
  const rating = average < (target - 0.5) ? 1 : average < (target + 0.5) ? 2 : 3;
  const ratingExplanation = rating === 1 
  ? 'wimp...' 
  : rating === 2 
  ? 'you did okay :)' 
  : 'beastmode!';
  return {
    periodLength,
    trainingDays,
    target,
    average,
    success,
    rating,
    ratingExplanation
  };
}

interface TrainingInput {
  data: number[];
  target: number;
}

const parseArguments = (args: string[]): TrainingInput => {
  if (args.length < 2) throw new Error('Provide target and at least one day of training data');

  const target = Number(args[0]);
  const data = args.slice(1).map(arg => Number(arg));

  if (isNaN(target) || data.some(isNaN)) {
    throw new Error('Use numbers only');
  }

  return {
    data,
    target
  };
}

const args = process.argv.slice(2);
const { data, target } = parseArguments(args);
console.log(calculateExercises(data, target));