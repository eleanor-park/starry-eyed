import { observer } from "mobx-react";
import * as React from 'react'
import { GalaxyCardStore } from '../../stores';
import "./GalaxyCard.scss";

interface GalaxyCardProps {
    store: GalaxyCardStore;
}

@observer
export class GalaxyCard extends React.Component<GalaxyCardProps> {

    private showConstellationFacts: boolean = false;

    onPointerDown = (e: React.PointerEvent): void => {
        e.stopPropagation();
    }

    render() {
        let store = this.props.store;
        if (this.showConstellationFacts) {

            return (
                <div className='galaxycard sideB'>
                    <h3>{store.constellation}</h3>
                    <p>{store.information}</p>
                </div>
            );
        }
        else {
            return (
                <div className='galaxycard sideA'>
                    <img src={store.url}/>
                </div>
            );
        }
    }
}
