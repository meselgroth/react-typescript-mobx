import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { observer } from 'mobx-react';
import Store, { Entity } from '../Store';
import TableStore from './TableStore';
import { EnhancedTable, HeadCell } from './EnhancedTable';
import { stableSort, getComparator } from './stableSort';

// ID must match an Entity property name
const headCells: HeadCell[] = [
  { id: 'name', numeric: false, disablePadding: false, label: 'App long name to stop width changing' },
  { id: 'id', numeric: false, disablePadding: false, label: 'Id' },
  { id: 'author', numeric: false, disablePadding: false, label: 'Author' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];
const tblStore = new TableStore(headCells);

export const CreateAppsMaterialTable = observer(({ store }: { store: Store }) => {  
  tblStore.setTotalCount(store.appsCount);

  tblStore.rows = stableSort(store.apps, getComparator(tblStore.order, tblStore.orderBy as keyof Entity))
    .slice(tblStore.page * tblStore.rowsPerPage, tblStore.page * tblStore.rowsPerPage + tblStore.rowsPerPage)
    .map((row, index) => {
      const isItemSelected = isSelected(row.name);
      const labelId = `enhanced-table-checkbox-${index}`;

      return <CreateRow key={index} row={row} isItemSelected={isItemSelected} labelId={labelId} />;
    });

  return (
    <EnhancedTable store={tblStore} />
  );
});

function CreateRow({ row, isItemSelected, labelId }: { row: Entity; isItemSelected: boolean; labelId: string; }) {
  return <TableRow
    hover
    onClick={(event) => handleClick(event, row.name)}
    role="checkbox"
    aria-checked={isItemSelected}
    tabIndex={-1}
    key={row.id}
    selected={isItemSelected}
  >
    <TableCell component="th" id={labelId} scope="row">
      {row.name}
    </TableCell>
    <TableCell align="left">{row.id}</TableCell>
    <TableCell align="left">{row.author}</TableCell>
    <TableCell align="left">{row.status}</TableCell>
  </TableRow>;
}

const isSelected = (name: string) => tblStore.selected.indexOf(name) !== -1;

const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
  const selectedIndex = tblStore.selected.indexOf(name);
  let newSelected: string[] = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(tblStore.selected, name);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(tblStore.selected.slice(1));
  } else if (selectedIndex === tblStore.selected.length - 1) {
    newSelected = newSelected.concat(tblStore.selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      tblStore.selected.slice(0, selectedIndex),
      tblStore.selected.slice(selectedIndex + 1),
    );
  }

  tblStore.setSelected(newSelected);
};