import { observable, computed, action } from 'mobx';

export class GalaxyCardStore {

public x: number = 0;

public y: number = 0;

public url: string = "";

public constellation: string = "";

public information: string = "";

@observable
public side: 'a'| 'b' | 'c' = 'a';

@observable
public wish: string = "";

public wishPrompt: string = "";

@computed
    public get transform(): string {
    return "translate(" + this.x + "px," + this.y + "px)"; // for CSS transform property
}

constructor(url: string, constellation: string, information: string, wishPrompt: string, x: number, y: number) {
    this.url = url;
    this.constellation = constellation;
    this.information = information;
    this.wishPrompt = wishPrompt;
    this.x = x;
    this.y = y;
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