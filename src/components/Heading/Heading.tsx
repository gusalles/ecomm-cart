interface Props {
  text: string;
}

export function Heading({ text }: Props) {
  return <h1 className="text-4xl mb-8 font-medium">{text}</h1>;
}
