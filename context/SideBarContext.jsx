import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarCollapsed(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSideBarCollapsed, toggleSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};