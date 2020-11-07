import { makeObservable, observable } from "mobx";

export default class Store {
    armyCount = 0;

    constructor(){
        makeObservable(this, {
            armyCount: observable,
        })
        this.armyCount = 1;
    }
}