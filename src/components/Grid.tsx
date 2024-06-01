import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type GridProps = {
  columns: number;
  gap: number;
} & StyledComponent &
  React.HTMLAttributes<HTMLDivElement>;

const Grid: React.FC<GridProps> = ({ columns, gap, sx, children, ...rest }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
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

type GridItemProps = {
  columnSpan: number;
} & StyledComponent &
  React.HTMLAttributes<HTMLDivElement>;

const GridItem: React.FC<GridItemProps> = ({
  columnSpan,
  sx,
  children,
  ...rest
}) => {
  return (
    <div
      style={{
        gridColumn: `span ${columnSpan}`,
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

export default { Grid, GridItem };
