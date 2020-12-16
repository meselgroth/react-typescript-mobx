import React, { ReactNode, ReactNodeArray } from 'react';

export const FancyCell = ({ value }: { value: string }) => <td>{value}</td>;

type TableProps = {
  children: ReactNodeArray
};

export const Row = ({ children }: { children: ReactNode }) =>
  <tr>
    {children}
  </tr>;

export const Table = ({ children }: TableProps) =>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Author</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>