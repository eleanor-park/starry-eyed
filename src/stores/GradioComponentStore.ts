import { observable, computed } from 'mobx';
import { client } from "@gradio/client";


export class GradioComponentStore {

    @observable
    public x: number = 0;

    @observable
    public y: number = 0;

    @computed
    public get response(): string {
        return "translate(" + this.x + "px," + this.y + "px)"; // for CSS transform property
    }
}