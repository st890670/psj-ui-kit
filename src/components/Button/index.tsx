interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button className="text-red" type="button" {...props}>
      {label}
    </button>
  );
};

export default Button;
