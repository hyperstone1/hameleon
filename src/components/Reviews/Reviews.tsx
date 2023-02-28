import React from 'react';
import './media.scss';
import { imgsReviews } from '../../constants/constants';

const Reviews = () => {
  // const imgs = [
  //   {
  //     url: 'https://thumb.tildacdn.com/tild6166-6432-4739-b536-656233346131/-/cover/320x555/center/center/-/format/webp/Screenshot_20220724-.png',
  //   },
  //   {
  //     url: 'https://thumb.tildacdn.com/tild6438-3765-4733-b065-366561383038/-/cover/320x555/center/center/-/format/webp/Screenshot_20220724-.png',
  //   },
  //   {
  //     url: 'https://thumb.tildacdn.com/tild6262-3066-4866-a166-616234623062/-/cover/320x555/center/center/-/format/webp/Screenshot_20220724-.png',
  //   },
  // ];
  return (
    <div id="reviews" className="reviews">
      <div className="reviews_container">
        <h1>Отзывы</h1>
        <div className="reviews_container__imgs">
          {imgsReviews.map((item, idx) => (
            <div key={idx} className="img">
              <img src={require(`${item.src}`)} alt="отзыв" />
            </div>
          ))}
          {/* {imgs.map((item) => (
            <div className="img">
              <img src={item.url} alt="отзыв" />
            </div>
          ))} */}
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
