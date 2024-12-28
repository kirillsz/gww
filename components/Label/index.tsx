type Props = {
  children: React.ReactNode;
  text: string;
};
const Label = ({ children, text }: Props) => {
  return (
    <label className="input-label fs-300">
      {text}
      {children}
    </label>
  );
};
export default Label;
