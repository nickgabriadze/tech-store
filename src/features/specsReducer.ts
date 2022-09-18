import { createSlice } from "@reduxjs/toolkit";


interface SpecsInterface {
    name: string,
    imageAddress: string,
    specs: {
        network: string,
        announced: string,
        dimensions: string,
        weight: string,
        build: string, 
        sim: string, 
        displaySize: string,
        platform: string,
        chipset: string,
        cpu: string,
        gpu: string,
        memory: string,
        camera: string,
        video: string,
        selfieCamera: string,
        battery: string,
        colors: string
    },
}

const initialState: SpecsInterface = {
    name: "",
    imageAddress: "",
    specs: {
        network: "",
        announced: "",
        dimensions: "",
        weight: "",
        build: "", 
        sim: "", 
        displaySize: "",
        platform: "",
        chipset: "",
        cpu: "",
        gpu: "",
        memory: "",
        camera: "",
        video: "",
        selfieCamera:"" ,
        battery: "",
        colors: ""
    },
   

}

export const specsReducer = createSlice({
    name: "specsReducer",
    initialState,
    reducers: {
        saveInfo: (state, action) => {
          
            return({
                ...state,
                name: action.payload.name,
                imageAddress: action.payload.imageAddress,
                specs: {
                    network: action.payload.network,
                    announced: action.payload.announced,
                    dimensions: action.payload.dimensions,
                    weight: action.payload.weight,
                    build: action.payload.build,   
                    sim: action.payload.sim,   
                    displaySize : action.payload.displaySize,
                    platform: action.payload.platform,
                    chipset: action.payload.chipset,
                    cpu: action.payload.cpu,
                    gpu : action.payload.gpu,
                    memory: action.payload.memory,
                    camera: action.payload.camera,
                    video: action.payload.video,
                    selfieCamera: action.payload.selfieCamera,
                    battery: action.payload.battery,
                    colors: action.payload.colors
                }
            })
        }
    }
})


export const {saveInfo} = specsReducer.actions;
export default specsReducer.reducer;