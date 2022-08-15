import styles from "./style.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
