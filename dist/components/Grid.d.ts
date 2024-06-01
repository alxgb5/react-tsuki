import React from 'react';
import { StyledComponent } from '../core/types';
type GridProps = {
    columns: number;
    gap: number;
} & StyledComponent & React.HTMLAttributes<HTMLDivElement>;
type GridItemProps = {
    columnSpan: number;
} & StyledComponent & React.HTMLAttributes<HTMLDivElement>;
declare const _default: {
    Grid: React.FC<GridProps>;
    GridItem: React.FC<GridItemProps>;
};
export default _default;
//# sourceMappingURL=Grid.d.ts.map