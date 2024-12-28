import { navLinks } from "@/data";
import NavigationLink from "../NavigationLink";
const NavigationList = () => {
  return (
    <ul className="nav-link-list">
      {navLinks.map((link) => (
        <NavigationLink key={link.name} {...link} />
      ))}
    </ul>
  );
};

export default NavigationList;
