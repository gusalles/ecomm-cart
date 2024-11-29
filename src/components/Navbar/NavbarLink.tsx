import { ElementType } from "react";
import { NavLink } from "react-router";

interface Props {
  Icon: ElementType;
  url: string;
  text: string;
}
export function NavBarLink({ url, text, Icon }: Props) {
  return (
    <NavLink to={url} className="mx-6 font-semibold flex items-baseline">
      <Icon className="mr-2" />
      {text}
    </NavLink>
  );
}
