import { useContext } from "react";
import { MenuContext } from "@/components/providers/menuProvider";
interface NavigationLinkProps {
  name: string;
  path: string;
}

const NavigationLink = ({ name, path }: NavigationLinkProps) => {
  const { toggleMenuVisibility } = useContext(MenuContext);
  return (
    <li className="fs-700 fw-medium">
      <a onClick={toggleMenuVisibility} href={path}>
        {name}
      </a>
    </li>
  );
};

export default NavigationLink;
