import { createSlice } from "@reduxjs/toolkit";

interface ShoppingCart {
    items: { id: number, name: string, imageAddress: string }[],
    numberOfItems: number
}

const initialState: ShoppingCart = {
    items: [],
    numberOfItems: 0
}

const shoppingCartReducer = createSlice({
    name: 'Shopping Cart',
    initialState,

    reducers: {
        addItem: (state, action): ShoppingCart => {
            for (let i = 0; i < state.items.length; i++) {
                if (
                    state.items[i].id === action.payload.phoneId
                    &&
                    state.items[i].name === action.payload.name
                    &&
                    state.items[i].imageAddress === action.payload.imageAddress
                ) {
                    return state
                }
            }
            const phoneToAdd = {
                id: action.payload.phoneId,
                imageAddress: action.payload.imageAddress,
                name: action.payload.name
            }


            return ({
                ...state,
                items: [...state.items, phoneToAdd],
                numberOfItems: state.numberOfItems + 1
            })



        },

        removeItem: (state, action) => {
            let newItemsArray = []
            state.items.map(each => console.log(each.id))
            for(let i = 0; i < state.items.length; i++) {
                if(state.items[i].id !== action.payload.itemId){
                    newItemsArray.push(state.items[i])
            
                }
            }

            return ({
                ...state,
                items: newItemsArray,
                numberOfItems: newItemsArray.length
            })
        }
    }
})


export const { addItem, removeItem } = shoppingCartReducer.actions;
export default shoppingCartReducer.reducer;