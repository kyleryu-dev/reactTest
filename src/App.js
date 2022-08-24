/* eslint-disable */

import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학','하늘']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick={
        ()=>{
          let lineCopy = [...글제목];
          lineCopy.sort();
          글제목변경(lineCopy);
        }
      }>가나다순 정렬</button>

      <button onClick={ 
        ()=>{
        let copy = [...글제목];
        copy[0] = copy[3];
        글제목변경(copy);
        } 
      }>수정 버튼</button>


      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { setGood( good + 1 ) } }>👍🏼</span> { good } </h4>
        <p>8월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>8월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>8월 23일 발행</p>
      </div>
    </div>
  );
}

export default App;
