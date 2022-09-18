import { createSlice } from "@reduxjs/toolkit";


interface Purchase {
    items: {id: number, name: string, quantity: number, imageAddress: string}[],
    personalInfo: {
        name: string,
        homeAddress: {
            country: string,
            zip: number,
            address: string
        }
    }
}

const initialState: Purchase = {
    items: [],
    personalInfo: {
        name: '',
        homeAddress: {
            country: '',
            zip: 0,
            address: ''
        }
    }
}

const purchaseReducer = createSlice({
    name: 'Purchase Reducer',
    initialState,
    reducers: {

        setItemInfo: (state, action) => {
            return ({
                ...state,
                items: [...state.items,{
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: action.payload.quantity,
                    imageAddress:action.payload.imageAddress
                }]
            })
        }
        
    }



})


export const {setItemInfo} = purchaseReducer.actions;
export default purchaseReducer.reducer;