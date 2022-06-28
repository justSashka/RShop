import s from './Header.module.css';
import headerLogo from '../../images/headerLogo.png';

const Header = (props) => {
  return (
    <div className={s.headerContainer}>
      <img className={s.headerLogo} src={headerLogo} alt="lol" />
      <ul className={s.headerMenu}>
        <li className={s.headerMenuItem}>Cart</li>
        <li className={s.headerMenuItem}>About</li>
        <li className={s.headerMenuItem}>Shop</li>
      </ul>
    </div>
  );
};

export default Header;
