import React, { useState, useEffect, useRef } from 'react';
// import './index.scss';
import './open.scss';
import './media.scss';
import Typed from 'typed.js';

const Content = () => {
  const textRef = useRef(null);
  var i = 0;
  var speed = 50; /* Скорость/длительность эффекта в миллисекундах */

  // setInterval каждые 2 секунды выполняет функцию
  // функция берет строку, делает split, потом

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ['дома', 'бизнеса', 'событий', 'работы'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="content">
      <img src={require('./hameleon6.jpg')} alt={'neon.hameleon'} />
      <div className="open_container">
        <h1 className="open">welcome</h1>
        <div className="container">
          <span className="title">
            <h1>
              Любые неоновые вывески для <span className="text" ref={textRef}></span>
            </h1>
          </span>
          <span>
            Производство топовой неоновой вывески из гибкого неона для интерьера, бизнеса,
            видеосъемок и мероприятий.
          </span>
          <a href="#form_app" className="btn">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">ЗАКАЗАТЬ</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
