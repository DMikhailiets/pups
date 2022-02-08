import React from 'react'
import './App.css'
import { RootComponent } from './pages/index'
// import 'antd/dist/antd.css'
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input } from 'antd';
//import './anotherCSS.less'

const App: React.FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<any>();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked: boolean) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };
  return <RootComponent/>
}

export default App