import { observable, computed } from 'mobx';

export class GalaxyCardStore {

@observable
public x: number = 0;

@observable
public y: number = 0;

public url: string = "";
public constellation: string = "";
public information: string = "";

@computed
    public get transform(): string {
        return "translate(" + this.x + "px," + this.y + "px)"; // for CSS transform property
    }

constructor(url: string, constellation: string, information: string) {
    this.url = url;
    this.constellation = constellation;
    this.information = information;
}
}