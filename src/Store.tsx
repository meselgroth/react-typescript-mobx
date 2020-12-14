import { makeObservable, observable } from "mobx";

export default class Store {
    apps: Array<App>;

    constructor() {
        makeObservable(this, {
            apps: observable,
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
}

export interface App {
    id: string;
    name: string;
}