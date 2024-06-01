import React from 'react';
import { StyledComponent } from '../core/types';
type FlexProps = {
    direction?: 'row' | 'column';
    align?: 'center' | 'flex-start' | 'flex-end';
    justify?: 'center' | 'space-between' | 'space-around';
    gap?: number;
} & StyledComponent & React.HTMLAttributes<HTMLDivElement>;
declare const Flex: React.FC<FlexProps>;
export default Flex;
//# sourceMappingURL=Flex.d.ts.map