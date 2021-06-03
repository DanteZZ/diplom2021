import React from "react";
export type TAppContext = {
  updateConfigs: Function;
  updateConfigPath: Function;
  path: string;
};

const AppContext = React.createContext<TAppContext>({
  updateConfigs: () => {},
  updateConfigPath: (path: string) => {},
  path: "",
});
export default AppContext;
