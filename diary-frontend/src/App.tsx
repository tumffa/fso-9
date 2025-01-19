import { useState, useEffect } from 'react'
import axios from 'axios'
import { DiaryEntry } from './types'
import DiaryComponent from './components/DiaryEntry'
import DiaryForm from './components/DiaryForm'

const baseUrl = 'http://localhost:3000/api/diaries';

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const response = await axios.get<DiaryEntry[]>(baseUrl);
      setDiaries(response.data);
    };

    fetchDiaries();
  }, []); 

  const submitDiary = async (entry: DiaryEntry) => {
    const response = await axios.post(baseUrl, entry);
    setDiaries(diaries.concat(response.data));
  };

  return (
    <div>
      <h1>Diaries</h1>
      <DiaryForm submit={submitDiary} />
      {diaries.map(diary =>
        <DiaryComponent key={diary.id} entry={diary} />
      )}
    </div>
  );
};

export default App;