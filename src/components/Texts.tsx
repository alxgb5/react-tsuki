import React from "react";
import { StyledComponent } from "../core/types";
import { css } from "@emotion/css";

// Path: src/components/Paragraph.tsx
type ParagraphProps = StyledComponent &
  React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph: React.FC<ParagraphProps> = ({
  sx,
  children,
  ...rest
}: ParagraphProps) => {
  return (
    <p
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </p>
  );
};

// Path: src/components/Heading.tsx
type HeadingProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & StyledComponent &
  React.HTMLAttributes<HTMLHeadingElement>;

const Heading: React.FC<HeadingProps> = ({
  variant,
  sx,
  children,
  ...rest
}: HeadingProps) => {
  const HeadingTag = variant;
  return (
    <HeadingTag
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </HeadingTag>
  );
};

export default { Paragraph, Heading };
