import { useState, useEffect } from 'react'
import axios from 'axios'
import { DiaryEntry } from './types'
import DiaryComponent from './components/DiaryEntry'

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

  return (
    <div>
      <h1>Diaries</h1>
      {diaries.map(diary =>
        <p><DiaryComponent key={diary.id} entry={diary} /></p>
      )}
    </div>
  );
};

export default App;