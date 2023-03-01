import React from 'react';
import './index.scss';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Marks = () => {
  return (
    <div className="marks">
      <div className="marks_container" data-auto-correct-mobile-width="false">
        {[...Array(4)].map(() => (
          <div className="t1003__item" data-auto-correct-mobile-width="false">
            {[
              ...Array(
                'Гарантия 1 год',
                'Качество',
                'Быстрое изготовление',
                'Пожаробезопасность',
                'Работа без посредника',
                'Доставка по всему миру',
              ),
            ].map((item) => (
              <>
                <div className="t-text t-text_md t1003__item-txt">{item}</div>
                <IoMdCheckmarkCircleOutline
                  style={{ width: '25px', height: '25px', color: '#66ed44' }}
                />
              </>
            ))}
          </div>
        ))}
      </div>

      {/* <div className="t1003__item" data-auto-correct-mobile-width="false">
        <div className="t-text t-text_md t1003__item-txt">Гарантия 1 год</div>

        <div className="t-text t-text_md t1003__item-txt">Качество</div>

        <div className="t-text t-text_md t1003__item-txt">Быстрое изготовление</div>

        <div className="t-text t-text_md t1003__item-txt">Пожаробезопасность</div>

        <div className="t-text t-text_md t1003__item-txt">Работа без посредника</div>

        <div className="t-text t-text_md t1003__item-txt">Доставка по всему миру</div>
      </div>
      <div className="t1003__item" data-auto-correct-mobile-width="false">
        <div className="t-text t-text_md t1003__item-txt">Гарантия 1 год</div>

        <div className="t-text t-text_md t1003__item-txt">Качество</div>

        <div className="t-text t-text_md t1003__item-txt">Быстрое изготовление</div>

        <div className="t-text t-text_md t1003__item-txt">Пожаробезопасность</div>

        <div className="t-text t-text_md t1003__item-txt">Работа без посредника</div>

        <div className="t-text t-text_md t1003__item-txt">Доставка по всему миру</div>
      </div>
      <div className="t1003__item" data-auto-correct-mobile-width="false">
        <div className="t-text t-text_md t1003__item-txt">Гарантия 1 год</div>

        <div className="t-text t-text_md t1003__item-txt">Качество</div>

        <div className="t-text t-text_md t1003__item-txt">Быстрое изготовление</div>

        <div className="t-text t-text_md t1003__item-txt">Пожаробезопасность</div>

        <div className="t-text t-text_md t1003__item-txt">Работа без посредника</div>

        <div className="t-text t-text_md t1003__item-txt">Доставка по всему миру</div>
      </div> */}
    </div>
  );
};

export default Marks;
