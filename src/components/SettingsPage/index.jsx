import React, { useState } from "react";
import styles from "./SettingsPage.module.scss";
import MenuButton from "../UI/MenuButton";

import backArrow from "../../assets/arrow_back.svg";
import InputField from "../UI/InputField";

const SettingsPage = ({ onClose, onSave, theme }) => {
   const [wallpaper, setWallpaper] = useState(theme.wallpaper);

   return (
      <div className={styles.page}>
         <div className={styles.page_inner}>
            <div
               style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "10px",
               }}
            >
               <MenuButton
                  onClick={() => {
                     onClose();
                     onSave(wallpaper);
                  }}
               >
                  <img src={backArrow} alt="back" />
               </MenuButton>
               <h1>Настройки</h1>
            </div>
            <p>Здесь представлены некоторые настройки для кастомизации обоев</p>
            <InputField
               label={"Ссылка на обои"}
               value={wallpaper}
               setValue={setWallpaper}
            />
         </div>
      </div>
   );
};

export default SettingsPage;
