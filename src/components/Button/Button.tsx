import { ButtonHTMLAttributes, ElementType } from "react";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  text?: string;
  Icon?: ElementType;
}

export function Button({ text, Icon, ...rest }: Props) {
  return (
    <button
      type="button"
      className="border rounded-sm py-1 px-3 font-semibold flex items-center"
      {...rest}
    >
      {Icon && <Icon className="mr-2" />}
      {text && text}
    </button>
  );
}
