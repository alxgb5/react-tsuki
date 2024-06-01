import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type SectionProps = StyledComponent & React.HTMLAttributes<HTMLElement>;

const Section: React.FC<SectionProps> = ({ sx, children, ...rest }) => {
  return (
    <section
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
