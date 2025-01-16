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
  ? 'good job :)' 
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));