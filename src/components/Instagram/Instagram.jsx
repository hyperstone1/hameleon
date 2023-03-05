import React from 'react';
import './media.scss';
import { BsInstagram } from 'react-icons/bs';

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="background-image-holder"></div>
      <div className="instagram_container">
        <h3 className="title">
          Подпишитесь на нас, чтобы увидеть новости, специальные предложения и наши последние работы
        </h3>
        <span className="description">
          Ознакомьтесь с некоторыми из наших последних работ и другими замечательными работами
          неона, чтобы вдохновиться. Подписывайтесь на нас за новостями и специальными предложениями
          #neon.hameleon
        </span>
        <button className="follow_btn">
          <div className="inst">
            <BsInstagram />
          </div>
          <a href="https://www.instagram.com/neon.hameleon.by/" rel="noreferrer" target={'_blank'}>
            <span className="follow_btn__text">Подписывайтесь на инстаграм @neon.hameleon</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Instagram;
