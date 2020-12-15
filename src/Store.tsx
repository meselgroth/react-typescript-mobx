import { computed, makeObservable, observable } from "mobx";

export default class Store {
  apps: Array<Entity> = [];

  constructor() {
    makeObservable(this, {
      apps: observable,
      appsCount: computed
    })
    this.apps = rows;

    setInterval(() => {
      this.changeName('305', 'Abc' + Math.round(Math.random() * 10));
    }, 1000);
  
    let idCount = 3;
    setInterval(() => {
      this.addApp({ id: idCount.toString(), name: String.fromCharCode(Math.round(Math.random() * 100+20)), author:'jjj', status:'Released' });
      idCount++;
    }, 10000);
  }

  changeName(id: string, newName: string) {
    this.apps.filter(app => app.id === id)[0].name = newName;
  }

  addApp(app: Entity) {
    this.apps.push(app);
  }

  get appsCount() {
    return this.apps.length;
  }
}

export interface Entity {
  id: string;
  name: string;
  author: string;
  status: string;
}

function createData(
  name: string,
  id: number,
  author: string,
  status: string,
): Entity {
  return {
    id: id.toString(),
    name,
    author: 'Bobbo',
    status: 'Released'
  };
}

const rows = [
  createData('Cupcake', 305, 'John', 'Released'),
  createData('Donut', 452, 'Bobbo', 'Rejected'),
  createData('Eclair', 262, 'John', 'Released'),
  createData('Frozen yoghurt', 159, 'John', 'Released'),
  createData('Gingerbread', 356, 'John', 'Released'),
  createData('Honeycomb', 408, 'John', 'Released'),
  createData('Ice cream sandwich', 237, 'Bobbo', 'Rejected'),
  createData('Jelly Bean', 375, 'Bobbo', 'Rejected'),
  createData('KitKat', 518, 'Bobbo', 'Rejected'),
  createData('Lollipop', 392, 'Bobbo', 'Rejected'),
  createData('Marshmallow', 318, 'Bobbo', 'Rejected'),
  createData('Nougat', 360, 'Bobbo', 'Rejected'),
  createData('Oreo', 437, 'Bobbo', 'Rejected'),
];