import { observable, computed, action } from 'mobx';

export class GalaxyCardStore {

public x: number = 0;

public y: number = 0;

public url: string = "";

public constellation: string = "";

public id: string = this.constellation;

public information: string = "";

@observable
public side: 'a'| 'b' | 'c' = 'a';

@observable
public wish: string = "";

@observable
public constellationImg = ";"

public wishPrompt: string = "";

@computed
    public get transform(): string {
    return "translate(" + this.x + "px," + this.y + "px)"; 
}

constructor(url: string, constellation: string, information: string, wishPrompt: string, x: number, y: number, constellationImg: string) {
    this.url = url;
    this.constellation = constellation;
    this.information = information;
    this.wishPrompt = wishPrompt;
    this.x = x;
    this.y = y;
    this.constellationImg = constellationImg;
}

@action
public setSide(side: 'a' | 'b' | 'c') {
    this.side = side;
}

@action
public setWish(wish: string) {
    this.wish = wish;
}

}