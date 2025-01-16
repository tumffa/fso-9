import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  try {
    const bmi = calculateBmi(height, weight);
    res.json({ weight, height, bmi });
  } catch (e) {
    res.json({ error: 'malformatted parameters' });
  }
})


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});