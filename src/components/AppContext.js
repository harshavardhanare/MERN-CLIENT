import React from 'react';

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
    const [users, setNav] = React.useState();
   

   

    return <AppContext.Provider value={users}>{children}</AppContext.Provider>;
}