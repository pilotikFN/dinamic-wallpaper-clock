import { useState } from "react";
import DigitalClock from "./DigitalClock";
import Background from "./components/Background";
import { useThemeContext } from "./contexts/theme-context";
import MenuButton from "./components/UI/MenuButton";
import MenuButtons from "./components/UI/MenuButtons";
import settingsIcon from "./assets/settings_icon.svg";
import SettingsPage from "./components/SettingsPage";

function App() {
   const { theme, setTheme } = useThemeContext();
   const [isSettingsOpen, setSettingsOpen] = useState(false);

   const settingsButtonHandler = () => {
      setSettingsOpen((prev) => !prev);
   };

   return (
      <Background wallpaper={theme.wallpaper}>
         <DigitalClock />
         <MenuButtons>
            <MenuButton onClick={settingsButtonHandler}>
               <img src={settingsIcon} alt="settings" />
            </MenuButton>
         </MenuButtons>
         {isSettingsOpen ? (
            <SettingsPage onClose={settingsButtonHandler} />
         ) : (
            <></>
         )}
      </Background>
   );
}

export default App;
