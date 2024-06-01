import React from 'react';
import { css } from '@emotion/css';
import { StyledComponent } from '../core/types';

type ListProps = StyledComponent & React.HTMLAttributes<HTMLUListElement>;

const List: React.FC<ListProps> = ({ sx, children, ...rest }: ListProps) => {
  return (
    <ul
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </ul>
  );
};

type ListItemProps = StyledComponent & React.HTMLAttributes<HTMLLIElement>;

const ListItem: React.FC<ListItemProps> = ({
  sx,
  children,
  ...rest
}: ListItemProps) => {
  return (
    <li
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </li>
  );
};

export default { List, ListItem };
