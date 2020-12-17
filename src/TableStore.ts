import { Order } from './stableSort';
import { ReactNode } from 'react';
import { makeAutoObservable } from "mobx";
import { Entity } from './Store';

export default class TableStore {
  rows: Array<ReactNode> = [];
  orderBy: keyof Entity = 'id'; // FIX
  order: Order = 'asc';
  selected: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  get rowCount() {
    return this.rows.length;
  }
  setOrder(order: Order) {
    this.order=order;
  }
  setOrderBy(property: keyof Entity) {
    this.orderBy=property;
  }
  setSelected(newSelected: string[]) {
      this.selected=newSelected;
  }
}