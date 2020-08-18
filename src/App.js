import React from 'react';
import './App.css';
import PersonsContainer from './Components/Persons/PersonsContainer';
import store from './Components/Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <PersonsContainer />
      </div>
    </Provider>

  );
}

export default App;
