import React from 'react';
import logo from './logo.svg';
import './App.css';

//redux actions and utils
import {useSelector, useDispatch} from 'react-redux'
import actions from './actions/index'

function App() {

  const {number} = useSelector(state=> state.counter)

  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {number}
        </a>
        <button onClick={()=> dispatch(actions.counter.increment())} style={
          {
            margin:10,
            padding:10,
            backgroundColor: "blueviolet",
            border:0,
            borderRadius:5,
            color:"white"
          }
        }>increment +</button>
        <button style={
          {
            margin:10,
            padding:10,
            backgroundColor: "blueviolet",
            border:0,
            borderRadius:5,
            color:"white"
          }
        }>decrement -</button>
      </header>
    </div>
  );
}

export default App;
