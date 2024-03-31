import styles from "./Background.module.scss";
import defaultBackground from "../../assets/background.jpg";
import React from "react";

const Background = ({ children, wallpaper }) => {
   return (
      <div
         className={styles.root}
         style={{
            backgroundImage: `url(${wallpaper || defaultBackground})`,
         }}
      >
         {children}
      </div>
   );
};

export default Background;
