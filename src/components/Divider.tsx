import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type DividerProps = Omit<StyledComponent, 'children'> &
  React.HTMLAttributes<HTMLHRElement>;

const Divider: React.FC<DividerProps> = ({ sx, ...rest }: DividerProps) => {
  return (
    <hr
      className={css`
        ${sx}
      `}
      {...rest}
    />
  );
};

export default Divider;
