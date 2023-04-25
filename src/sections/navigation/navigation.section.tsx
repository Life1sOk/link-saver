// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import TopicsAddBlock from "../../blocks/topics-add/topics-add.block";
import SettingsBlock from "../../blocks/settings/settings.block";
import { NavigationStyle } from "./navigation.style";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../App/store/slices/theme.slice";
import { RootState } from "../../App/store/store";


const NavigationSection = () => {

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const dispatch = useDispatch();

  return (
    <NavigationStyle theme={isDarkMode} >
      <TopicsAddBlock />
      <TopicsBlock/>
      <SettingsBlock onThemeChange={handleThemeChange}/>
    </NavigationStyle>
  );
};

export default NavigationSection;