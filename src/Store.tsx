import { makeObservable, observable, action } from "mobx";

export default class Store {
    armyCount = 0;
    style = '';

    constructor() {
        makeObservable(this, {
            armyCount: observable,
            incrementArmyCount: action,
        })
        this.armyCount = 1;

        setInterval(this.incrementArmyCount.bind(this), 1000);
    }
    incrementArmyCount() {
        this.armyCount++;
    }
}