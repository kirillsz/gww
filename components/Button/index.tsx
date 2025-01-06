interface ButtonProps {
  text: string;
  type?: "primary" | "accent";
  className?: string;
  pending?: boolean;
  disabled?: boolean;
}
const Button = ({
  className,
  type = "primary",
  text,
  disabled = false,
}: ButtonProps) => {
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
