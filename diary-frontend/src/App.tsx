import { useState, useEffect } from 'react'
import axios from 'axios'
import { DiaryEntry } from './types'
import DiaryComponent from './components/DiaryEntry'
import DiaryForm from './components/DiaryForm'

const baseUrl = 'http://localhost:3000/api/diaries';

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchDiaries = async () => {
      const response = await axios.get<DiaryEntry[]>(baseUrl);
      setDiaries(response.data);
    };

    fetchDiaries();
  }, []); 

  const submitDiary = async (entry: DiaryEntry) => {
    try {
      const response = await axios.post(baseUrl, entry);
      setDiaries(diaries.concat(response.data));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data)
        setTimeout(() => {
          setError(undefined);
        }, 5000);
      }
    }
  };

  return (
    <div>
      <h1>Diaries</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <DiaryForm submit={submitDiary} />
      {diaries.map(diary =>
        <DiaryComponent key={diary.id} entry={diary} />
      )}
    </div>
  );
};

export default App;