import { observer } from "mobx-react";
import * as React from 'react'
import { GalaxyCardStore } from '../../stores';
import "./GalaxyCard.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface GalaxyCardProps {
    store: GalaxyCardStore;
}

/**
 * Class to represent each of the 3 galaxy card
 */
@observer
export class GalaxyCard extends React.Component<GalaxyCardProps> {

    onPointerDown = (e: React.PointerEvent): void => {
        e.stopPropagation();
        if (this.props.store.side == 'a') {
            this.props.store.setSide('b');
        }
        else if (this.props.store.side == 'b') {
            this.props.store.setSide('c');
        }
        this.forceUpdate();
    }

    onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        alert("your wish has been sent into the universe <3")
        this.props.store.setSide('a');
        this.forceUpdate();
    }

    setWish = (wish: string) => {
        this.props.store.setWish(wish);
        this.forceUpdate();
    }

    render() {
        let store = this.props.store;
        if (store.side == 'a') {
            return (
                <div className='galaxycard sideA' style={{transform: store.transform}} onPointerDown={this.onPointerDown}>
                    <img src={store.url}/>
                </div>
            );
            }   
        else if (store.side == 'b') {
            return (
                <div className='galaxycard sideB' style={{transform: store.transform}} onPointerDown={this.onPointerDown}>
                    <h2>Your Constellation:</h2>
                    <h1>{store.constellation}</h1>
                    <img src={store.constellationImg}/>
                    <p>{store.information}</p>
                </div>
            );
        }
        else {
            let noToolbar = {
                toolbar: false,
            };
            return (
                <div className='galaxycard sideC' style={{transform: store.transform}} onPointerDown={this.onPointerDown}>
                    <h2>{store.wishPrompt}</h2>
                    <div className="galaxycard sideC wishbox">
                        <ReactQuill theme="snow"
                                modules={noToolbar}
                                value={store.wish}
                                onChange={this.setWish}
                                placeholder="Enter your wish here!" />
                    </div>
                    <button onClick={this.onClick} style={{marginTop: "3px"}} >Send! </button>
                </div>
            )
        }
    }
}
