import "./header.css";
import logo from "./logo-carte.svg";

import { toggleModal, removeUser } from "../authModall/modalSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="123" />
        </Link>
        <div className="header__search search">
          <input
            type="text"
            className="search__input"
            placeholder="Поиск блюд и ресторанов"
          />
          <button className="search__btn" />
        </div>
        <button className="header__cart">Корзина</button>
        <Link to="/qq" className="auth__link">
          Вникуда
        </Link>
        <Link to="/autorization" className="auth__link">
          Авторизация на отдельной странице
        </Link>
        {isAuth ? (
          <div className="header__auth auth">
            Пользователь: {email}
            <button
              onClick={() => dispatch(removeUser())}
              className="auth__link"
            >
              Выйти
            </button>
          </div>
        ) : (
          <div className="header__auth auth">
            <button
              onClick={() => dispatch(toggleModal())}
              className="auth__link"
            >
              Войти
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
