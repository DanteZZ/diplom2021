import React from "react";
export type TAppContext = {
  updateConfigs: Function;
  setTreeDir: Function;
  treeDir: string;
};

const AppContext = React.createContext<TAppContext>({
  updateConfigs: () => {},
  setTreeDir: (path: string) => {},
  treeDir: "",
});
export default AppContext;
