interface InputProps {
  type: "text";
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}
const Input = ({
  type,
  placeholder,

  name,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      name={name}
      className="input fs-300 fw-medium"
      type={type}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
