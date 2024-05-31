import React from "react";
import { StyledComponent } from "../core/types";
import { css } from "@emotion/css";

type InputProps = StyledComponent & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ sx, children, ...rest }: InputProps) => {
  return (
    <input
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </input>
  );
};

export default Input;
