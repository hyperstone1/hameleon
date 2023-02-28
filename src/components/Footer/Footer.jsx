import React from 'react';
import './media.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={require('./logo-removebg-preview.png')} alt="logo" />
      </div>
      <div className="info">
        ООО "Неон Хата"
        <br />
        Адрес: г. Брест, ул. Скрипникова, д. 3А/4
        <br />
        Р/с: BY55 ALFA 3013 2B46 5700 1027 0000
        <br />
        ЗАО «Альфа-Банк» БИК ALFABY2X
        <br />
        УНП: 291760993
        <br />
        Тел. +375 (33) 333-33-33
        <br />
        E-mail: <a href="mailto:neonxata@mail.ru">neon.hameleon@mail.ru</a>
      </div>
    </footer>
  );
};

export default Footer;
