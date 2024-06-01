import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type FlexProps = {
  direction?: 'row' | 'column';
  align?: 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'space-between' | 'space-around';
  gap?: number;
} & StyledComponent &
  React.HTMLAttributes<HTMLDivElement>;

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  align = 'center',
  justify = 'center',
  gap = 0,
  sx,
  children,
  ...rest
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
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

export default Flex;
