import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchWokItems } from "./wokSlice";
import { toggleWok } from "./wokSlice";

import { addCartItem, calcSum } from "../cart/cartSlice";

import "./wok.css";

const Wok = () => {
  const {
    wokItems,
    wokItemsLoadingStatus,
    wokName,
    wokImageUrl,
    wokPrice,
    wokWeight,
    wokDescription,
    wokId,
  } = useSelector((state) => state.wok);

  const cartItems = useSelector((state) => state.cart);
  const { sum } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(1);
    dispatch(fetchWokItems());
  }, []);

  const onCloseWok = () => {
    dispatch(toggleWok());
  };

//   const onAddItem = (data) => {
//     console.log("добавляем");
//     const id = Math.floor(Math.random() * 100);
//     dispatch(addCartItem({ id, ...data }));
//     dispatch(toggleWok());
//   };

  if (wokItemsLoadingStatus === "loading") {
    return <div>Загружается</div>;
  } else if (wokItemsLoadingStatus === "error") {
    return <div>Ошибка</div>;
  }

  const renderItems = (arr) => {
    if (arr.length === 0) {
      <h2>Дополнений пока нет</h2>;
    }
    return arr.map(({ id, name, price, imageUrl, ...props }) => (
      <li key={id} {...props} className="conten-wok__item item-content-wok">
        <div className="item-content-wok__description">
          <div className="item-content-wok__name">{name}</div>
          <div className="item-content-wok__price">+{price} p.</div>
        </div>
        <input
          className="item-content-wok__checkbox"
          type="checkbox"
          name="1"
        />
      </li>
    ));
  };

  const elements = renderItems(wokItems);

  //===================================================================
  //Костыль. Подсчет суммы

  const onAdd = (data) => {
    const id = wokId;
    if (Object.keys(cartItems.entities).length === 0) {
      // ????? а так вообще нормально
      dispatch(addCartItem({ id, ...data }));
      dispatch(calcSum(data.wokPrice));
    } else {
      if (cartItems.entities.hasOwnProperty(wokId)) {
        console.log("такое уже есть - увеличить кол-во");
      } else {
        dispatch(addCartItem({ id, ...data }));
        let newSum = +sum + +data.wokPrice;
        dispatch(calcSum(newSum));
      }
    }
    // dispatch(addCartItem({id, ...data}))
  };

  //===================================================================

  return (
    <div className="wok">
      <div className="wok__wrap">
        <div className="wok__body">
          <button onClick={() => onCloseWok()} className="wok__close">
            X
          </button>
          <div className="wok__picture">
            <img className="wok__image" src={wokImageUrl} alt="1" />
          </div>
          <div className="wok__content conten-wok">
            <div className="conten-wok__header header-content-wok">
              <div className="header-content-wok__wrap">
                <div className="header-content-wok__name">
                  Пицца "{wokName}"
                </div>
                <div className="header-content-wok__weight">{wokWeight}г</div>
              </div>
              <div className="header-content-wok__price">{wokPrice}р</div>
              <div className="header-content-wok__description">
                {wokDescription}
              </div>
            </div>
            <h2 className="conten-wok__title">Соус на итальянскую пиццу</h2>
            <ul className="conten-wok__list">{elements}</ul>
          </div>
        </div>
        <div className="footer-wok">
          <div className="footer-wok__counter">
            <button type="submit" class="footer-wok__button">
              -
            </button>
            <span class="footer-wok__count">1</span>
            <button type="submit" class="footer-wok__button">
              +
            </button>
          </div>
          <button
            onClick={() => onAdd({ wokName, wokPrice, wokWeight })}
            type="submit"
            class="footer-wok__add button"
          >
            Добавить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wok;
