import { observer } from "mobx-react";
import * as React from 'react'
import { GalaxyCardStore } from '../../stores';
import "./GalaxyCard.scss";

interface GalaxyCardProps {
    store: GalaxyCardStore;
}

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

    onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.stopPropagation();
        alert("your wish has been sent into the universe <3")
    }

    setWish = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        this.props.store.setWish(e.target.value);
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
                    <p>{store.information}</p>
                </div>
            );
        }
        else {
            return (
                <div className='galaxycard sideC' style={{transform: store.transform}} onPointerDown={this.onPointerDown}>
                    <p>{store.wishPrompt}</p>
                    <form onSubmit={this.onSubmit} >
                        <label style={{fontWeight: "bold"}}>
                            <input type="text" value={store.wish} onChange={this.setWish} 
                                style={{height:"150px", width: 220, marginTop: "10px"}} />
                        </label>
                        <input type="submit" value="Send!" style={{marginTop: "3px"}} />
                    </form>
                </div>
            )
        }
    }
}
