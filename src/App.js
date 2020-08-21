import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CreatePerson from './Components/Person/CreatePerson';
import PersonsContainer from './Components/Persons/PersonsContainer';
import store from './Components/Redux/store';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import UpdatePersonComponent from './Components/Person/UpdatePersonContainer'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <PersonsContainer />

          <CreatePerson />

          {/* <Route path='/update/userId' render={() =>  <UpdatePersonComponent /> } /> */}
          {/* <Route path='/' render={() =>   } /> */}
          {/* <Route path='/' render={() =>   } /> */}
        </div>
      </Provider>
    </BrowserRouter>


  );
}

export default App;
