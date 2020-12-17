import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { observer } from 'mobx-react';
import Store, { Entity } from './Store';
import TableStore from './TableStore';
import { EnhancedTable } from './MaterialTable';
import { stableSort, getComparator } from './stableSort';

const tableStore = new TableStore();

export const CreateAppsMaterialTable = observer(({ store }: { store: Store }) => {

  const isSelected = (name: string) => tableStore.selected.indexOf(name) !== -1;

    tableStore.rows = stableSort(store.apps, getComparator(tableStore.order, tableStore.orderBy)) //stableSort(store.apps, getComparator(order, orderBy))
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
            const isItemSelected = isSelected(row.name);
            const labelId = `enhanced-table-checkbox-${index}`;

            return createRow(row, isItemSelected, labelId);
        });

    return (
        <EnhancedTable store={tableStore} />
    );
});

function createRow(row: Entity, isItemSelected: boolean, labelId: string) {
    return <TableRow
        hover
        // onClick={(event) => handleClick(event, row.name)}
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
        <TableCell align="left">{row.status}</TableCell>
    </TableRow>;
}
