import { computed, makeObservable, observable } from "mobx";

export default class Store {
    apps: Array<App> = [];

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

export interface App {
    id: string;
    name: string;
}