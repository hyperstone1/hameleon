import React from 'react';
import './index.scss';
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
          #neonpopsicle
        </span>
        <button className="follow_btn">
          <div className="inst">
            <BsInstagram />
          </div>
          <span className='follow_btn__text'>Подписывайтесь на инстаграм @neon.hameleon</span>
        </button>
      </div>
    </div>
  );
};

export default Instagram;
