import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type FormProps = StyledComponent & React.FormHTMLAttributes<HTMLFormElement>;

const Form: React.FC<FormProps> = ({ sx, children, ...rest }: FormProps) => {
  return (
    <form
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
