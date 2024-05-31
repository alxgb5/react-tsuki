import React from "react";
import { StyledComponent } from "../core/types";
import { css } from "@emotion/css";

type SpanProps = StyledComponent & React.HTMLAttributes<HTMLSpanElement>;

const Span: React.FC<SpanProps> = ({ sx, children, ...rest }: SpanProps) => {
  return (
    <span
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Span;
