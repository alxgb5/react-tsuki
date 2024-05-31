import React from "react";
import { StyledComponent } from "../core/types";
import { css } from "@emotion/css";

type CheckboxProps = StyledComponent &
  React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  sx,
  children,
  ...rest
}: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      className={css`
        ${sx}
      `}
      {...rest}
    />
  );
};

export default Checkbox;
