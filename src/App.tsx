import React, { useEffect } from 'react';
import './App.scss';
import Detail from './Page/Detail/Detail';
import Chat from './Page/Chat/Chat';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {

  // useEffect(() => {

  //   axios
  //     .get ('https://itunes.apple.com/us/rss/topalbums/limit=100/json',)
  //     .then((res) => {
  //         setData(res.data.feed.entry)
  //         console.log(res.data.feed.entry[0]["im:image"][0].label)
  //     })
  //     .catch((err) => {
  //         console.log(err)
  //     })  
  // },[])

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Chat/>}/>

        </Routes>
      </header>
    </div>
  );
}

export default App;
