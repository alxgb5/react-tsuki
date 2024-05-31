import React from "react";
import { StyledComponent } from "../core/types";
import { css } from "@emotion/css";

type RadioProps = StyledComponent & React.InputHTMLAttributes<HTMLInputElement>;

const Radio: React.FC<RadioProps> = ({ sx, children, ...rest }: RadioProps) => {
  return (
    <input
      type="radio"
      className={css`
        ${sx}
      `}
      {...rest}
    />
  );
};

export default Radio;
