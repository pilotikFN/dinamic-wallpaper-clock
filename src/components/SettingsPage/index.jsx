import React from "react";
import styles from "./SettingsPage.module.scss";

const SettingsPage = ({ onClose }) => {
   return (
      <div onClick={onClose} className={styles.page}>
         <div className={styles.page_inner}></div>
      </div>
   );
};

export default SettingsPage;
