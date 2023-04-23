import HeaderCartButton from "../UI/HeaderCartButton";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>MealsAPP</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src="/assets/img/meals.jpg" alt="맛있는 식사!" />
      </div>
    </>
  );
}

export default Header;
