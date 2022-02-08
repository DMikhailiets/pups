import { Card, Switch } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useThemeSwitcher } from "react-css-theme-switcher";

import React from "react";

type SettingsPageComponent = {
  setSettings: Function;
  settings: any;
};

const SettingsPageComponent: React.FC<SettingsPageComponent> = ({
  setSettings,
  settings,
}) => {
  const [isDarkMode, setIsDarkMode] = React.useState<any>();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();
  const toggleTheme = (isChecked: boolean) => {
    setIsDarkMode(isChecked);
    setSettings(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };
  return (
    <Card title="Настройки" style={{ width: "100%", minHeight: "94vh" }}>
      <Content>
        темная тема{" "}
        <Switch checked={settings.darkTheme} onChange={toggleTheme} />
      </Content>
    </Card>
  );
};

export default SettingsPageComponent;
