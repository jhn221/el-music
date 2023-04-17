import React, { useEffect, useState } from 'react';
import './App.scss';
import Detail from './Page/Detail/Detail';
import MusicChart from './Page/Chart/MusicChart';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [data, setData] = useState<any[]>([]);

  const getMusicDetail = (data:any) => {
    setData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<MusicChart getMusicDetail={getMusicDetail}/>}/>
          <Route path='/detail/:musicId' element={<Detail data={data}/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;