const calculateBmi = (height: number, weight: number): string => {
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
  }
};

console.log(calculateBmi(180, 74));