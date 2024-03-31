import React from "react";
import styles from "./MenuButtons.module.scss";

const MenuButtons = ({ children }) => {
   return <div className={styles.menuButtons}>{children}</div>;
};

export default MenuButtons;
