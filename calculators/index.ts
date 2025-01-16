import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

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

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    res.json({ error: 'parameters missing' });
  }

  if (isNaN(Number(target)) || !Array.isArray(daily_exercises)) {
    res.json({ error: 'malformatted parameters' });
  }

  try {
    const response = calculateExercises(daily_exercises, target);
    res.json(response);
  } catch (e) {
    res.json({ error: 'malformatted parameters' });
  }
})


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});