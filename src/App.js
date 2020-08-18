import React from 'react';
import './App.css';
import PersonsContainer from './Components/Persons/PersonsContainer';
import store from './Components/Redux/store';
import { Provider } from 'react-redux';
import CreateClassContainer from './Components/Person/CreatePersonClassContainer';
import {addNewUser} from './Components/Redux/person-reducer'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <PersonsContainer />
        <CreateClassContainer />
      </div>
    </Provider>

  );
}

export default App;
