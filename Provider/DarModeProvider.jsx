import React , {createContext , useState} from "react";
export const darkModeContext = createContext(null);
const DarModeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const dataInfo = {
    isDark: isDark,
    setIsDark: setIsDark,
  };
  return (
    <darkModeContext.Provider value={dataInfo}>
      {children}
    </darkModeContext.Provider>
  );
};

export default DarModeProvider;
