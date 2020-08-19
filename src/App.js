import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CreatePerson from './Components/Person/CreatePerson';
import PersonsContainer from './Components/Persons/PersonsContainer';
import store from './Components/Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersonsContainer />
        <CreatePerson />
      </div>
    </Provider>

  );
}

export default App;
