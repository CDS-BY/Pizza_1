import styles from "./Autorization.module.scss";

function Autorization() {
  return (
    <form action="auth" className={styles.root}>
      <div className={styles.item}>
        <label htmlFor="" className="modal__label">
          Почта
        </label>
        <input type="email" className="modal__input" />
      </div>
      <div className={styles.item}>
        <input type="password" className="modal__input" />
      </div>
      <button className={styles.button}>Войти</button>
    </form>
  );
}

export default Autorization;
