"use client";
import { createContext, PropsWithChildren, useState } from "react";
import type { FC } from "react";

interface MenuContextProps {
  isVisible: boolean;
  toggleMenuVisibility: () => void;
}

export const MenuContext = createContext<Partial<MenuContextProps>>({});

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
