import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type ImageProps = Omit<StyledComponent, 'children'> &
  React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({ sx, ...rest }: ImageProps) => {
  return (
    <img
      className={css`
        ${sx}
      `}
      {...rest}
    />
  );
};

export default Image;
