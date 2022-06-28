import ProductCard from './productCard/ProductCard.jsx';
import React from 'react';
import bd from '../Baza.json';

import s from './MainContent.module.css';

const stack = [
  'React',
  'HTML',
  'CSS',
  'JavaScript',
  'Php',
  'NodeJS',
  'Front-End',
  'Back-End',
  'Full Stack',
];

const MainContent = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickTech = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={s.mainContentContainer}>
      <div className={s.filterContainer}>
        {stack.map((tech, i) => (
          <div
            className={activeIndex === i ? s.filterItemActive : s.filterItem}
            key={tech}
            onClick={() => onClickTech(i)}>
            {tech}
          </div>
        ))}
      </div>
      <div className={s.cardContainer}>
        {bd.map((product) => (
          <ProductCard key={product.id} title={product.title} jobs={product.jobTypes} />
        ))}
      </div>
    </div>
  );
};
export default MainContent;
