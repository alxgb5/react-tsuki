import React from 'react';
import { StyledComponent } from '../core/types';
type ParagraphProps = StyledComponent & React.HTMLAttributes<HTMLParagraphElement>;
type HeadingProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & StyledComponent & React.HTMLAttributes<HTMLHeadingElement>;
declare const _default: {
    Paragraph: React.FC<ParagraphProps>;
    Heading: React.FC<HeadingProps>;
};
export default _default;
//# sourceMappingURL=Texts.d.ts.map