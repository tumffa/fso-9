export const calculateBmi = (height: number, weight: number): string => {
  const hInMeters = height / 100;
  const bmi = weight / (hInMeters * hInMeters);

  switch (true) {
    case bmi < 18.5:
      return 'Underweight';
    case bmi >= 18.5 && bmi < 25:
      return 'Normal range';
    case bmi >= 25 && bmi < 30:
      return 'Overweight';
    case bmi >= 30:
      return 'Obese';
    default:
      return 'Invalid BMI';
  }
};

interface BodyData {
  height: number;
  weight: number;
}

const parseBmiArguments = (args: string[]): BodyData => {
  if (args.length < 2) throw new Error('Provide height and weight');

  const height = Number(args[0]);
  const weight = Number(args[1]);

  if (isNaN(height) || isNaN(weight)) {
    throw new Error('Use numbers only');
  }

  return {
    height,
    weight
  };
}

if (require.main === module) {
  const bmiArgs = process.argv.slice(2);
  const { height, weight } = parseBmiArguments(bmiArgs);
  console.log(calculateBmi(height, weight));
}