import React from 'react';
import { StyledComponent } from '../core/types';
type StackProps = {
    direction: 'row' | 'column';
    gap?: number;
} & StyledComponent & React.HTMLAttributes<HTMLDivElement>;
declare const Stack: React.FC<StackProps>;
export default Stack;
//# sourceMappingURL=Stack.d.ts.map