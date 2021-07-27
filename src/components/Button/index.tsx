import React from "react";
import {MyButton} from "./styles"
interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
 
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    
  }) => { 
  return (
    <MyButton

      onClick={onClick}
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
}

export default Button;