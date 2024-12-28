"use client";
import { useContext } from "react";
import { MenuContext } from "../providers/menuProvider";
import ContactForm from "../ContactForm";
import Telegram from "../Icons/Telegram";
import NavigationList from "../NavigationList";

const Header = () => {
  const { isVisible, toggleMenuVisibility } = useContext(MenuContext);
  return (
    <header className="header container">
      <div className="logo fw-bold">
        <a href="./">GWW</a>
      </div>

      <button
        tabIndex={0}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isVisible}
        onClick={toggleMenuVisibility}
      >
        <p className="sr-only">Меню</p>
        <span></span>
        <span></span>
      </button>
      <nav className="primary-navigation" data-visible={isVisible}>
        <NavigationList />
        <hr />
        <ContactForm />
        <Telegram />
      </nav>
    </header>
  );
};

export default Header;
