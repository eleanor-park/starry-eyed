import { observer } from "mobx-react";
import * as React from 'react'
import { SkyStore, WelcomePageStore } from '../../stores';
import { WelcomePage } from "../WelcomePage/WelcomePage";
import "./Sky.scss";

interface SkyProps {
    store: SkyStore;
}

@observer
export class Sky extends React.Component<SkyProps> {

    private welcomePage: WelcomePageStore = new WelcomePageStore();
    private isPointerDown: boolean = false;

    onPointerDown = (e: React.PointerEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        this.isPointerDown = true;
        document.removeEventListener("pointermove", this.onPointerMove);
        document.addEventListener("pointermove", this.onPointerMove);
        document.removeEventListener("pointerup", this.onPointerUp);
        document.addEventListener("pointerup", this.onPointerUp);

    }

    onPointerUp = (e: PointerEvent): void => {
        e.stopPropagation();
        e.preventDefault();
        this.isPointerDown = false;
        document.removeEventListener("pointermove", this.onPointerMove);
        document.removeEventListener("pointerup", this.onPointerUp);
    }

    onPointerMove = (e: PointerEvent): void => {
        e.stopPropagation();
        e.preventDefault();
        if (!this.isPointerDown) return;

        this.props.store.x += e.movementX;
        this.props.store.y += e.movementY;
    }


    render() {
        let store = this.props.store;
        return (
            <div className='sky-container' onPointerDown={this.onPointerDown} >
                <div className='sky' style={{transform: this.props.store.transform}} >
                    <div className='welcomepagebox' >
                        < WelcomePage store={this.welcomePage} />
                    </div>
                </div>
            </div>
        )
    }
}
