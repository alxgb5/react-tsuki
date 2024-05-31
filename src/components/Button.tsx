import React from "react";
import { css } from "@emotion/css";
import { StyledComponent } from "../core/types";

type ButtonProps = StyledComponent &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  sx,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
