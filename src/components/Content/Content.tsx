import React from 'react';
// import './index.scss';
import './open.scss';
import './media.scss';

const Content = () => {
  return (
    <div className="content">
      <img src={require('./hameleon6.jpg')} alt={'neon.hameleon'} />
      <div className="open_container">
        <h1 className="open">welcome</h1>
        <div className="container">
          <h1>Вывески из гибкого неона</h1>
          <span>Изготавливаем качественные уютные вывески из гибкого неона в Беларуси</span>
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
