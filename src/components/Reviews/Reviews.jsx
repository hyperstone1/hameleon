import React from 'react';
import './media.scss';
import { imgsReviews } from '../../constants/constants';

const Reviews = () => {
  return (
    <div id="reviews" className="reviews">
      <div className="reviews_container">
        <h1>Отзывы</h1>
        <div className="reviews_container__imgs">
          {imgsReviews.map((item, idx) => (
            <div key={idx} className="img">
              <img src={item.src} alt="отзыв" />
            </div>
          ))}
        </div>
      </div>
      <div className="neon_border">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/010/366/177/small/square-rectangle-picture-border-with-neon-line-footage-effect-seamless-loop-4k-free-video.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Reviews;
