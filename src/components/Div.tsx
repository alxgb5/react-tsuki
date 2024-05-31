import React from "react";
import { css } from "@emotion/css";
import type { StyledComponent } from "../core/types";
type DivProps = StyledComponent & React.HTMLAttributes<HTMLDivElement>;

const Div: React.FC<DivProps> = ({ sx, children, ...rest }: DivProps) => {
  return (
    <div
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Div;
