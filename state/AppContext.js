
import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
    
  let sharedState = {
    data: [
      {
        name: "john",
        age: 33
      },
      {
        name: "belly",
        age: 22
      }
    ]
  };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );

};

export function useAppContext() {
  return useContext(AppContext);
};