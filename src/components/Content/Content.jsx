import React, { useEffect, useRef } from 'react';
import './media.scss';
import Typed from 'typed.js';
import backImg from '../../assets/images/hameleon6.jpg';

const Content = () => {
  const textRef = useRef(null);

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
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="content">
      <img src={backImg} alt={'neon.hameleon'} />
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
