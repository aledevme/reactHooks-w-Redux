import React from 'react';
import logo from './logo.svg';
import './App.css';

//redux actions and utils
import {useSelector, useDispatch} from 'react-redux'
import actions from './actions/index'

function App() {

  const {number} = useSelector(state=> state.counter)
  const currentUser = useSelector(state=> state.currentUser)

  const dispatch = useDispatch()

  const user = { 
    name : 'Alejandro'
  }
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          currentUser.loggedIn ? 
          <div>
            <p>
            {currentUser.loggedIn ? 'logged in' : 'no logueado'}
          </p>
          <p>
            {currentUser.user.name}
          </p>
          </div>
          :
          <div>
          <p>
            Not logged in yet
          </p>
          <button onClick={()=> dispatch(actions.user.setUser(user))} style={
            {
              margin:10,
              padding:10,
              backgroundColor: "tomato",
              border:0,
              borderRadius:5,
              color:"white"
            }
          }>Log in</button>
          </div>
          
          
        
        }
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
        <button onClick={()=> dispatch(actions.counter.decrement())} style={
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
