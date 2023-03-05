import React, { useRef } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Process from './components/Process/Process';
import Works from './components/Works/Works';
import Instagram from './components/Instagram/Instagram';
import Reviews from './components/Reviews/Reviews';
import FormApp from './components/FormApp/FormApp';
import Footer from './components/Footer/Footer';
import Marks from './components/Marks/Marks';
import { AiOutlineArrowUp } from 'react-icons/ai';

function App() {
  const btnRef = useRef(null);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const ref = btnRef.current;
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      ref.style.display = 'block';
    } else {
      ref.style.display = 'none';
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <Process />
      <Works />
      <Reviews />
      <Instagram />
      <FormApp />
      <Marks />
      <Footer />
      <button className="btn-top" ref={btnRef} onClick={topFunction}>
        <AiOutlineArrowUp />
      </button>
    </div>
  );
}

export default App;
