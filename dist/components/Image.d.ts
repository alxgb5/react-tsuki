import React from 'react';
import { StyledComponent } from '../core/types';
type ImageProps = Omit<StyledComponent, 'children'> & React.ImgHTMLAttributes<HTMLImageElement>;
declare const Image: React.FC<ImageProps>;
export default Image;
//# sourceMappingURL=Image.d.ts.map