import { ThemeProvider } from "styled-components";

import { useAppSelector } from "../store/hooks";

import { light, dark } from "../theme";

interface IThemeProvide {
  children: any;
}

const CustomTheme = ({ children }: IThemeProvide) => {
  const activeTheme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <ThemeProvider theme={activeTheme === "light" ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
