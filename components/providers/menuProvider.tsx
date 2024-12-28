"use client";
import { createContext, PropsWithChildren, useState } from "react";
import type { FC } from "react";

export const MenuContext = createContext({});

const MenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setisVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setisVisible((p) => !p);
  };
  return (
    <MenuContext.Provider value={{ isVisible, toggleMenuVisibility }}>
      {children}
    </MenuContext.Provider>
  );
};
export default MenuProvider;
