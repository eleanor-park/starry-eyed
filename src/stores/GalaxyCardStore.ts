import { observable, computed, action } from 'mobx';

export class GalaxyCardStore {

@observable
public x: number = 0;

@observable
public y: number = 0;


public url: string = "";
public constellation: string = "";
public information: string = "";

@observable
public showConstellationFacts = false;

@computed
    public get transform(): string {
        return "translate(" + this.x + "px," + this.y + "px)"; // for CSS transform property
    }

constructor(url: string, constellation: string, information: string, x: number, y: number) {
    this.url = url;
    this.constellation = constellation;
    this.information = information;
    this.x = x;
    this.y = y;
}

@action
public setConstellationFacts(show: boolean) {
    this.showConstellationFacts = show;
}
}