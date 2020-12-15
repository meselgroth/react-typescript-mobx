import React, { ReactNodeArray } from 'react';

export const FancyCell = ({ name }: { name: string }) => <td>{name}</td>;

type TableProps = {
  children: ReactNodeArray
};

export const Table = ({ children }: TableProps) =>
  <table>
    <thead>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Author</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>