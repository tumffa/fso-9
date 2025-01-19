import { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { DiaryEntry, Weather, Visibility } from '../types';

const DiaryForm = ({ submit }: { submit: (entry: DiaryEntry) => void }) => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('')
  const [visibility, setVisibility] = useState<Visibility>();
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({
      id: Number(uuid()),
      date,
      weather: weather as Weather,
      visibility: visibility!,
      comment
    });
    setDate('');
    setWeather('');
    setVisibility(undefined);
    setComment('');
  };

  return (
    <div>
      <h3>Add a new diary entry</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
        <label style={{ marginRight: '10px' }}>Weather</label>
          <>
            sunny
            <input type="radio" name="weather" value={Weather.Sunny}
              checked={weather === Weather.Sunny}
              onChange={() => setWeather(Weather.Sunny)}
            />
            rainy
            <input type="radio" name="weather" value={Weather.Rainy}
              checked={weather === Weather.Rainy}
              onChange={() => setWeather(Weather.Rainy)}
            />
            cloudy
            <input type="radio" name="weather" value={Weather.Cloudy}
              checked={weather === Weather.Cloudy}
              onChange={() => setWeather(Weather.Cloudy)}
            />
            stormy
            <input type="radio" name="weather" value={Weather.Stormy}
              checked={weather === Weather.Stormy}
              onChange={() => setWeather(Weather.Stormy)}
            />
            windy
            <input type="radio" name="weather" value={Weather.Windy}
              checked={weather === Weather.Windy}
              onChange={() => setWeather(Weather.Windy)}
            />
          </>
        </div>
        <div>
          <label style={{ marginRight: '10px' }}>Visibility</label>
          <>
            great
            <input type="radio" name="visibility" value={Visibility.Great}
              checked={visibility === Visibility.Great}
              onChange={() => setVisibility(Visibility.Great)}
            />
            good
            <input type="radio" name="visibility" value={Visibility.Good}
              checked={visibility === Visibility.Good}
              onChange={() => setVisibility(Visibility.Good)}
            />
            ok
            <input type="radio" name="visibility" value={Visibility.Ok}
              checked={visibility === Visibility.Ok}
              onChange={() => setVisibility(Visibility.Ok)}
            />
            poor
            <input type="radio" name="visibility" value={Visibility.Poor}
              checked={visibility === Visibility.Poor}
              onChange={() => setVisibility(Visibility.Poor)}
            />
          </>
        </div>
        <div>
          <label>Comment</label>
          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiaryForm;