import { css } from "@emotion/css";
import React from "react";
import { StyledComponent } from "../core/types";

type TextareaProps = StyledComponent &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = ({
  sx,
  children,
  ...rest
}: TextareaProps) => {
  return (
    <textarea
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
