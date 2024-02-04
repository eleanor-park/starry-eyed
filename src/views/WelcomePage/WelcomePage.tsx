import { observer } from "mobx-react";
import * as React from 'react'
import { GalaxyCardStore, WelcomePageStore } from '../../stores';
import { GalaxyCard } from "./GalaxyCard";
import "./WelcomePage.scss";
import { Constants } from "../../Constants"

interface WelcomePageProps {
    store: WelcomePageStore;
}

@observer
export class WelcomePage extends React.Component<WelcomePageProps> {

    private isPointerDown: boolean = false;

    onPointerDown = (e: React.PointerEvent): void => {
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
    }


    render() {
        let store = this.props.store;
        return (
            <div className="welcomepage" >
                <h1> Create a personalized journey through the stars! </h1>
                <h3> Which galactic aura speaks to you the most? </h3>
                <div className="imagerow">
                    <GalaxyCard store={new GalaxyCardStore(Constants.IMAGE_1_LINK, Constants.IMAGE_1_NAME, Constants.IMAGE_1_INFO)} />
                    <GalaxyCard store={new GalaxyCardStore(Constants.IMAGE_2_LINK, Constants.IMAGE_2_NAME, Constants.IMAGE_2_INFO)} />
                    <GalaxyCard store={new GalaxyCardStore(Constants.IMAGE_3_LINK, Constants.IMAGE_3_NAME, Constants.IMAGE_3_INFO)} />
                </div>
            </div>
        );
    }
}
