import React from 'react';
import { StyledComponent } from '../core/types';
import { css } from '@emotion/css';

type TableProps = StyledComponent & React.TableHTMLAttributes<HTMLTableElement>;

const Table: React.FC<TableProps> = ({ sx, children, ...rest }: TableProps) => {
  return (
    <table
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </table>
  );
};

type TableHeadProps = StyledComponent &
  React.HTMLAttributes<HTMLTableSectionElement>;

const TableHead: React.FC<TableHeadProps> = ({
  sx,
  children,
  ...rest
}: TableHeadProps) => {
  return (
    <thead
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </thead>
  );
};

type TableBodyProps = StyledComponent &
  React.HTMLAttributes<HTMLTableSectionElement>;

const TableBody: React.FC<TableBodyProps> = ({
  sx,
  children,
  ...rest
}: TableBodyProps) => {
  return (
    <tbody
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </tbody>
  );
};

type TableRowProps = StyledComponent &
  React.HTMLAttributes<HTMLTableRowElement>;

const TableRow: React.FC<TableRowProps> = ({
  sx,
  children,
  ...rest
}: TableRowProps) => {
  return (
    <tr
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </tr>
  );
};

type TableCellProps = StyledComponent &
  React.HTMLAttributes<HTMLTableCellElement>;

const TableCell: React.FC<TableCellProps> = ({
  sx,
  children,
  ...rest
}: TableCellProps) => {
  return (
    <td
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </td>
  );
};

type TableHeadCellProps = StyledComponent &
  React.HTMLAttributes<HTMLTableCellElement>;

const TableHeadCell: React.FC<TableHeadCellProps> = ({
  sx,
  children,
  ...rest
}: TableHeadCellProps) => {
  return (
    <th
      className={css`
        ${sx}
      `}
      {...rest}
    >
      {children}
    </th>
  );
};

export default {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
};
