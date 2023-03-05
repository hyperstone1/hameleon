import React from 'react';
import './index.scss';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Marks = () => {
  return (
    <div className="marks">
      <div className="marks_container" data-auto-correct-mobile-width="false">
        {[...Array(4)].map((_, id) => (
          <div key={id} className="t1003__item" data-auto-correct-mobile-width="false">
            {[
              'Гарантия 1 год',
              'Качество',
              'Быстрое изготовление',
              'Пожаробезопасность',
              'Работа без посредника',
              'Доставка по всему миру',
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="t-text t-text_md t1003__item-txt">{item}</div>
                <IoMdCheckmarkCircleOutline
                  style={{ width: '25px', height: '25px', color: '#66ed44' }}
                />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marks;
