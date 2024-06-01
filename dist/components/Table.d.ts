import React from 'react';
import { StyledComponent } from '../core/types';
type TableProps = StyledComponent & React.TableHTMLAttributes<HTMLTableElement>;
type TableHeadProps = StyledComponent & React.HTMLAttributes<HTMLTableSectionElement>;
type TableBodyProps = StyledComponent & React.HTMLAttributes<HTMLTableSectionElement>;
type TableRowProps = StyledComponent & React.HTMLAttributes<HTMLTableRowElement>;
type TableCellProps = StyledComponent & React.HTMLAttributes<HTMLTableCellElement>;
type TableHeadCellProps = StyledComponent & React.HTMLAttributes<HTMLTableCellElement>;
declare const _default: {
    Table: React.FC<TableProps>;
    TableHead: React.FC<TableHeadProps>;
    TableBody: React.FC<TableBodyProps>;
    TableRow: React.FC<TableRowProps>;
    TableCell: React.FC<TableCellProps>;
    TableHeadCell: React.FC<TableHeadCellProps>;
};
export default _default;
//# sourceMappingURL=Table.d.ts.map