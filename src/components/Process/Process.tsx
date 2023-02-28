import React from 'react';
import './index.scss';

const Process = () => {
  return (
    <div className="process">
      <div className="container_process">
        <img src={require('./sign-looking-for.jpg')} alt="sign" />
        <div className="text">
          <ol>
            <li className="process_item">
              <div className="process_number">
                <span>1</span>
              </div>
              <div className="process__body">
                <h4>Выберите варианты для вашей неоновой вывески</h4>
                <p>
                  Создавайте и предварительно просматривайте свою неоновую вывеску с помощью нашего
                  простого в использовании неонового дизайнера. Напишите все, что вы можете себе
                  представить, ярким неоном. Делать заявление. Выберите цвет и стиль крепления, а
                  затем разместите заказ.
                </p>
              </div>
            </li>
            <li className="process_item">
              <div className="process_number">
                <span>2</span>
              </div>
              <div className="process__body">
                <h4>Мы изготавливаем и отправляем вашу неоновую вывеску</h4>
                <p>
                  Ручная работа со стеклом – это искусство. Мы изготовим вашу вывеску и отправим вам
                  фотографии перед отправкой. Он будет тщательно упакован и доставлен прямо к вашей
                  двери, всего за 2-3 недели.
                </p>
              </div>
            </li>
            <li className="process_item">
              <div className="process_number">
                <span>3</span>
              </div>
              <div className="process__body">
                <h4>Покажите свой новый неон</h4>
                <p>
                  Наши 8 настраиваемых вариантов крепления и выбор цвета шнура гарантируют, что ваша
                  новая неоновая вывеска идеально впишется в ваш интерьер.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Process;
