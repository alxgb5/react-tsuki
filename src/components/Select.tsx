import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type SelectProps = StyledComponent &
  React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({
  sx,
  children,
  ...rest
}: SelectProps) => {
  return (
    <select
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </select>
  );
};

type OptionProps = StyledComponent &
  React.OptionHTMLAttributes<HTMLOptionElement>;

const Option: React.FC<OptionProps> = ({
  sx,
  children,
  ...rest
}: OptionProps) => {
  return (
    <option
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </option>
  );
};

export default { Select, Option };
