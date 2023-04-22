// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import TopicsAddBlock from "../../blocks/topics-add/topics-add.block";
import SettingsBlock from "../../blocks/settings/settings.block";
import { NavigationStyle } from "./navigation.style";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../App/store/slices/dark-mode.slice";
import { RootState } from "../../App/store/store";


const NavigationSection = () => {

  const darkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <NavigationStyle className={darkMode ? "darktheme" : "whitetheme"} >
      <TopicsAddBlock />
      <TopicsBlock/>
      <SettingsBlock onThemeChange={handleThemeChange}/>
    </NavigationStyle>
  );
};

export default NavigationSection;