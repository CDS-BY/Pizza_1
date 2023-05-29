import Items from "../../components/items/Items";
import Cart from "../../components/cart/Cart";
import styles from "./Home.module.scss";
import Categories from "../../components/Categories";

function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <Categories />
        <Items />
      </div>
      <Cart />
    </div>
  );
}

export default Home;
