import React from "react";
import { StyledComponent } from "../core/types";
import { css } from "@emotion/css";

type ContainerProps = StyledComponent & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({
  sx,
  children,
  ...rest
}: ContainerProps) => {
  return (
    <div
      className={css`
        margin: 1em;
        padding: 1em;
        ${sx}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
