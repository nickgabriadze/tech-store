import { createSlice } from "@reduxjs/toolkit";


export interface Purchase {
    items: { id: number, name: string, quantity: number, imageAddress: string },
    personalInfo: {
        name: string,
        homeAddress: {
            country: string,
            zip: string,
            address: string
        }
    }
}

const initialState: Purchase = {
    items: {id: 0, name: '', quantity: 0, imageAddress: ''},
    personalInfo: {
        name: '',
        homeAddress: {
            country: '',
            zip: '',
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
                items: {
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: action.payload.quantity,
                    imageAddress: action.payload.imageAddress
                }
            })
        },

        savePersonalInfo: (state, action) => {
            return ({
                ...state,
                personalInfo: {
                    name: action.payload.name,
                    homeAddress: {
                        ...state.personalInfo.homeAddress,
                        country: action.payload.country,
                        zip: action.payload.zip,
                        address: action.payload.address
                    }
                }
            })
        }

    }



})


export const { setItemInfo, savePersonalInfo } = purchaseReducer.actions;
export default purchaseReducer.reducer;