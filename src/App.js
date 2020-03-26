import React, { useState } from 'react';
//import Header from './Header';
import './global.css';
import Logon from './pages/Logon';

function App() {
  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // return (
  //   <div>
  //     <Header title="Be the batman"> Counter: {counter} </Header>
  //     <button onClick={increment}> Increment </button>
  //   </div>
  // );
  return (
    <div>
      <Logon />
    </div>
  )  
}

export default App;
