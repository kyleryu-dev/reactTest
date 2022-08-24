/* eslint-disable */

import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [name, setName] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>{ name[0] } <span onClick={ () => { setGood( good + 1 ) } }>👍🏼</span> { good } </h4>
        <p>8월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{ name[1] } <button onClick={ ()=>{ setName('야') } }>첫번째 제목 변경</button></h4>
        <p>8월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{ name[2] }</h4>
        <p>8월 23일 발행</p>
      </div>
    </div>
  );
}

export default App;
