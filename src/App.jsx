import { useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";
import Background from "./components/Background";
import { useThemeContext } from "./contexts/theme-context";
import MenuButton from "./components/UI/MenuButton";
import MenuButtons from "./components/UI/MenuButtons";
import settingsIcon from "./assets/settings_icon.svg";
import SettingsPage from "./components/SettingsPage";

function App() {
   const { theme } = useThemeContext();
   const [isSettingsOpen, setSettingsOpen] = useState(false);

   const [backgroundWallpaper, setBackgroundWallpaper] = useState(
      theme.wallpaper
   );

   const settingsButtonHandler = () => {
      setSettingsOpen((prev) => !prev);
   };

   const onSettingsSaveHandler = (wallpaper) => {
      localStorage.setItem("wallpaper", wallpaper);
      setBackgroundWallpaper(wallpaper);
   };

   return (
      <Background wallpaper={backgroundWallpaper}>
         <DigitalClock />
         <MenuButtons>
            <MenuButton onClick={settingsButtonHandler}>
               <img src={settingsIcon} alt="settings" />
            </MenuButton>
         </MenuButtons>
         {isSettingsOpen ? (
            <SettingsPage
               theme={backgroundWallpaper}
               onClose={settingsButtonHandler}
               onSave={onSettingsSaveHandler}
            />
         ) : (
            <></>
         )}
      </Background>
   );
}

export default App;
