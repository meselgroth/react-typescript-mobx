import { computed, makeObservable, observable } from "mobx";

export default class Store {
  apps: Array<Entity> = [];

  constructor() {
    makeObservable(this, {
      apps: observable,
      appsCount: computed
    })
    this.apps = [{
      id: '1',
      name: 'Abc'
    },
    {
      id: '2',
      name: 'Def'
    }];

    setInterval(() => {
      this.changeName('1', 'abc' + Math.round(Math.random() * 10));
    }, 1000);
  
    let idCount = 3;
    setInterval(() => {
      this.addApp({ id: idCount.toString(), name: (Math.round(Math.random() * 10)).toString() });
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
}