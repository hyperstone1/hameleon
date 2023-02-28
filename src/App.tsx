import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Process from './components/Process/Process';
import Works from './components/Works/Works';
import Instagram from './components/Instagram/Instagram';
import Reviews from './components/Reviews/Reviews';
import FormApp from './components/FormApp/FormApp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Process />
      <Works />
      <Reviews />
      <Instagram />
      <FormApp />
      <Footer />
    </div>
  );
}

export default App;
