import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Process from './components/Process/Process';
import Works from './components/Works/Works';
import Instagram from './components/Instagram/Instagram';
import Reviews from './components/Reviews/Reviews';
import FormApp from './components/FormApp/FormApp';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Process />
      <Works />
      <Instagram />
      <Reviews />
      <FormApp />
    </div>
  );
}

export default App;
