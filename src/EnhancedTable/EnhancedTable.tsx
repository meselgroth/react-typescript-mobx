import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';
import { Entity } from '../Store';
import TableStore from './TableStore';
import { Order } from './stableSort';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';

interface HeadCell {
  disablePadding: boolean;
  id: keyof Entity;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  { id: 'name', numeric: false, disablePadding: false, label: 'App long name to stop width changing' },
  { id: 'id', numeric: false, disablePadding: false, label: 'Id' },
  { id: 'author', numeric: false, disablePadding: false, label: 'Author' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Entity) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Entity) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

export const EnhancedTable = observer(({ store }: { store: TableStore}) => {
  const classes = useStyles();

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Entity) => {
    const isAsc = store.orderBy === property && store.order === 'asc';
    store.setOrder(isAsc ? 'desc' : 'asc');
    store.setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    store.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setRowsPerPage(parseInt(event.target.value, 10));
    store.setPage(0);
  };

  const emptyRows = store.rowsPerPage - Math.min(store.rowsPerPage, store.totalCount - store.page * store.rowsPerPage);
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={store.selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={store.order}
              orderBy={store.orderBy}
              onRequestSort={handleRequestSort}
              rowCount={store.totalCount}
            />
            <TableBody>
              {store.rows}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  {/* !!Set col count, required?!! */}
                  <TableCell colSpan={5} /> 
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={store.totalCount}
          rowsPerPage={store.rowsPerPage}
          page={store.page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
});