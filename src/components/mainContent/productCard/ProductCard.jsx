import React from 'react';
import reactImg from '../../../images/headerLogo.png';

import s from './ProductCard.module.css';

const ProductCard = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className={s.productCardContainer}>
      <div className={s.productImageContainer}>
        <img className={s.productImg} src={reactImg} alt="react" />
      </div>
      <span className={s.productTitle}>{props.title}</span>
      <div className={s.productMenuContainer}>
        <ul className={s.productMenu}>
          {props.jobs.map((job, i) => (
            <li
              className={activeIndex === i ? s.productMenuItemActive : s.productMenuItem}
              key={i}
              onClick={() => setActiveIndex(i)}>
              {job}
            </li>
          ))}
        </ul>
        <button className={s.buyButton}>Buy</button>
      </div>
    </div>
  );
};
export default ProductCard;
