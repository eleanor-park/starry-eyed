import { observable, computed } from 'mobx';

export class SkyStore {

@observable
public x: number = 0;

@observable
public y: number = 0;

@computed
    public get transform(): string {
        return "translate(" + this.x + "px," + this.y + "px)"; // for CSS transform property
    }

}