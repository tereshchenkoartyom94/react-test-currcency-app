import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Entry} from "./components/Entry";
import {Provider} from 'react-redux';
import {store} from "./store/createStore";

function App() {
  return (
      <Provider store={store}>
        <Entry />
      </Provider>
  );
}

export default App;
