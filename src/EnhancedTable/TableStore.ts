import { Order } from './stableSort';
import { ReactNode } from 'react';
import { makeAutoObservable } from "mobx";
import { Entity } from '../Store';

export default class TableStore {
  totalCount: number = 0;
  rows: Array<ReactNode> = [];
  orderBy: keyof Entity = 'id'; // FIX
  order: Order = 'asc';
  selected: string[] = [];
  page: number = 0;
  rowsPerPage: number = 5;

  constructor() {
    makeAutoObservable(this);
  }
  setTotalCount(count: number) {
    this.totalCount = count;
  }
  setOrder(order: Order) {
    this.order = order;
  }
  setOrderBy(property: keyof Entity) {
    this.orderBy = property;
  }
  setSelected(newSelected: string[]) {
    this.selected = newSelected;
  }
  setPage(newPage: number) {
    this.page = newPage;
  }
  setRowsPerPage(arg0: number) {
    this.rowsPerPage = arg0;
  }
}