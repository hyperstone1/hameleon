import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { imgsWorks } from '../../constants/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';
import { useWindowSize } from '../../hooks/useWindowSize';

const Works = () => {
  const [width] = useWindowSize();
  const [slides, setSlides] = useState();
  useEffect(() => {
    console.log(width);
    if (width < 1120) {
      setSlides(2);
    }
    if (width < 760) {
      setSlides(1);
    }
    if (width > 1120) {
      setSlides(3);
    }
  }, [width]);

  return (
    <div id="works" className="works">
      <div className="works_container">
        <h1 className="title">Наши работы</h1>
        {imgsWorks.map((item) => (
          <>
            <div className="works_cards">
              <h2 className="works_title">{item.title}</h2>
              <div className="cards_container">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={slides}
                  navigation
                  loop={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {item.imgs.map((item, idx) => (
                    <SwiperSlide>
                      <Card>
                        <Card.Link href={item.url} target="_blank">
                          <Card.Img variant="top" src={item.src} />
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                          </Card.Body>
                        </Card.Link>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Works;
