interface ButtonProps {
  text: string;
  type?: "primary" | "accent";
  className?: string;
  pending?: boolean;
}
const Button = ({ className, type = "primary", text }: ButtonProps) => {
  return (
    <button className="button fs-300 fw-medium" type="submit" data-type={type}>
      {text}
    </button>
  );
};

export default Button;
