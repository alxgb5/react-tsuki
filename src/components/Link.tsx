import React from 'react';
import { css } from '@emotion/css';
import { StyledComponent } from '../core/types';

type LinkProps = StyledComponent &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ sx, children, ...rest }: LinkProps) => {
  return (
    <a
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
