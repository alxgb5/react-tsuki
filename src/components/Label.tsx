import React from "react";
import { StyledComponent } from "../core/types";
import { css } from "@emotion/css";

type LabelProps = StyledComponent & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ sx, children, ...rest }: LabelProps) => {
  return (
    <label
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;
