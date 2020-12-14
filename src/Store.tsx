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
        }
        ];
    }

    get appsCount(){
        return this.apps.length;
    }
}

export interface Entity {
    id: string;
    name: string;
}