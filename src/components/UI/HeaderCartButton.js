import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [btnIsHL, setBtnIsHL] = useState(false);
  const cartCtx = useContext(CartContext);

  const btnClasses = `${classes.button} ${btnIsHL ? classes.bump : ""}`;

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHL(true);
    const timer = setTimeout(() => {
      setBtnIsHL(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} {...props}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
