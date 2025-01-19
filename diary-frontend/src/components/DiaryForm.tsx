import { v1 as uuid } from 'uuid';
import { useField } from '../hooks/useField';
import { DiaryEntry, Weather, Visibility } from '../types';

const DiaryForm = ({ submit }: { submit: (entry: DiaryEntry) => void }) => {
  const date = useField('text');
  const weather = useField('text');
  const visibility = useField('text');
  const comment = useField('text');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({
      id: Number(uuid()),
      date: date.value,
      weather: weather.value as Weather,
      visibility: visibility.value as Visibility,
      comment: comment.value
    });
    date.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    weather.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    visibility.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    comment.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div>
      <h3>Add a new diary entry</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date</label>
          <input {...date} />
        </div>
        <div>
          <label>Weather</label>
          <input {...weather} />
        </div>
        <div>
          <label>Visibility</label>
          <input {...visibility} />
        </div>
        <div>
          <label>Comment</label>
          <input {...comment} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiaryForm;