interface ButtonProps {
  text: string;
  type?: "primary" | "accent";
  pending?: boolean;
  disabled?: boolean;
}
const Button = ({ type = "primary", text, disabled = false }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="button fs-300 fw-medium"
      type="submit"
      data-type={type}
    >
      {text}
    </button>
  );
};

export default Button;
