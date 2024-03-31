import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({ label, value, setValue }) => {
   return (
      <div className={styles.inputField}>
         <p>{label}</p>
         <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
      </div>
   );
};

export default InputField;
