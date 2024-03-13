import { ReactNode, createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import "../App.module.css";
import styles from "../App.module.css";

export type CreateContextProps = {
  isDarkMode: boolean;
  key?: string;
  toggleDarkMode?: () => void;
};
type DarkModeProviderProps = {
  children: ReactNode;
};
const DarkModContext = createContext<CreateContextProps>({
  isDarkMode: false,
  key: "isDarkMode",
});

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  function ToggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark);
  }

  return (
    <DarkModContext.Provider
      value={{ isDarkMode: isDarkMode, toggleDarkMode: ToggleDarkMode }}
    >
      <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
        {children}
      </div>
    </DarkModContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModContext);
  if (context === undefined) {
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  } else {
    return context;
  }
}
