import React from "react";
import styles from "./MenuButton.module.scss";

const MenuButton = ({ children, onClick }) => {
   return (
      <div onClick={onClick} className={styles.menuButton}>
         {children}
      </div>
   );
};

export default MenuButton;
