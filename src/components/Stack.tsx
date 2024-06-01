import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type StackProps = {
  direction: 'row' | 'column';
  gap?: number;
} & StyledComponent &
  React.HTMLAttributes<HTMLDivElement>;

const Stack: React.FC<StackProps> = ({
  direction,
  gap = '1rem',
  sx,
  children,
  ...rest
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        gap,
      }}
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Stack;
