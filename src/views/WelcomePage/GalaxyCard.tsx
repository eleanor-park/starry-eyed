import { observer } from "mobx-react";
import * as React from 'react'
import { GalaxyCardStore, GradioComponentStore } from '../../stores';
import "./GalaxyCard.scss";
import { GradioComponent } from "./GradioComponent";

interface GalaxyCardProps {
    store: GalaxyCardStore;
}

@observer
export class GalaxyCard extends React.Component<GalaxyCardProps> {

    private gradioStore: GradioComponentStore = new GradioComponentStore();

    onPointerDown = (e: React.PointerEvent): void => {
        e.stopPropagation();
        e.preventDefault();
        this.props.store.setConstellationFacts(!this.props.store.showConstellationFacts);
        this.forceUpdate();
    }

    render() {
        let store = this.props.store;
        if (this.props.store.showConstellationFacts) {
            return (
                <div className='galaxycard sideB' style={{transform: store.transform}} onPointerDown={this.onPointerDown}>
                    <h2>Your Constellation:</h2>
                    <h1>{store.constellation}</h1>
                    <p>{store.information}</p>
                    <GradioComponent store={this.gradioStore}/>
                </div>
            );
        }
        else {
            return (
                <div className='galaxycard sideA' style={{transform: store.transform}} onPointerDown={this.onPointerDown}>
                    <img src={store.url}/>
                </div>
            );
        }
    }
}
