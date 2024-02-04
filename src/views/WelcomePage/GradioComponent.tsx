import * as React from 'react'
import { client } from "@gradio/client";
import { GradioComponentStore } from '../../stores';
import "./GradioComponent.scss";

interface GradioComponentProps {
    store: GradioComponentStore;
    
}

export class GradioComponent extends React.Component<GradioComponentProps> {
    async componentDidMount() {
        try {
            const app = await client("https://aa34ab82fa4f305305.gradio.live/", { hf_token: "hf_ella-mo" });
            const result = await app.predict("/chat", ["Hello!!"]);
            console.log(result);
            // Assuming you want to update the MobX store with the result
        } catch (error) {
            console.error("Error");
        }
    }

}
