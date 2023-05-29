import styles from "./Categories.module.scss";
import { useState } from "react";

const items = ["Все", "Пиццы", "Хот-доги", "Суси"];

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className={styles.root}>
      {items.map((name, i) => (
        <button
          key={i}
          onClick={() => setActiveCategory( i )}
          className={activeCategory === i ? styles.active : styles.item}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
