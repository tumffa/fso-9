import { v1 as uuid } from 'uuid';
import { useField } from '../hooks/useField';
import { DiaryEntry, Weather, Visibility } from '../types';

const DiaryForm = ({ submit }: { submit: (entry: DiaryEntry) => void }) => {
  const date = useField('text');
  const weather = useField('text');
  const visibility = useField('text');
  const comment = useField('text');

  return (
    <form onSubmit={(e) => {
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
    }}>
      <div>
        <label>Date</label>
        <input type={date.type} value={date.value} onChange={date.onChange} />
      </div>
      <div>
        <label>Weather</label>
        <input type={weather.type} value={weather.value} onChange={weather.onChange} />
      </div>
      <div>
        <label>Visibility</label>
        <input type={visibility.type} value={visibility.value} onChange={visibility.onChange} />
      </div>
      <div>
        <label>Comment</label>
        <input type={comment.type} value={comment.value} onChange={comment.onChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DiaryForm;