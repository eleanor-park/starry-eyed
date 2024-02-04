import { observer } from "mobx-react";
import * as React from 'react'
import { WelcomePageStore } from '../../stores';
import "./WelcomePage.scss";

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
                    <img src="https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d1/27/d127ac61-a3f3-4a26-a4f4-f855de632580/phenom-endings-space-jan14.jpg" 
                        alt= "light blue galaxy with yellow stars"/>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Hubble_Sees_a_Horsehead_of_a_Different_Color.jpg"
                        alt = "pink galaxy with light blue nebula"/>
                    <img src = "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/12/star_cluster_ic_348_nircam_image/25361255-1-eng-GB/Star_Cluster_IC_348_NIRCam_image_pillars.jpg" 
                        alt = "free-floating pink brown dwarf"/>
                </div>
            </div>
        );
    }
}
