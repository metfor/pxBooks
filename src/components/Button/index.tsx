import React from "react";
import { MyButton } from "./styles";
interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  type?: string;
}

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  type,
}) => {
  return (
    <MyButton
      onClick={onClick}
      type="submit"
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </MyButton>
  );
};

export default Button;
