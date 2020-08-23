import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import StartPage from './Components/Common/startPage';
import CreatePerson from './Components/Person/createPerson';
import PersonSingle from './Components/Person/personSingle.js';
import UpdatePerson from './Components/Person/updatePersonContainer';
import PersonsContainer from './Components/Persons/personsContainer';
import store from './Components/Redux/store';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Route path='' render={() => <StartPage />} />
          <Route path='/persons' render={() => <PersonsContainer />} />
          <Route path='/person/:userId' render={() => <PersonSingle />} />
          <Route path='/create' render={() => <CreatePerson />} />
          <Route path='/update/:userId' render={() => <UpdatePerson />} />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
