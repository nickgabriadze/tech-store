import { createSlice } from "@reduxjs/toolkit";

interface ShoppingCart {
    items: { id: number, name: string, imageAddress: string, quantity: 1 }[],
    numberOfItems: number
}

const initialState: ShoppingCart = {
    items: [{
        id: 6,
        name: 'Samsung Galaxy S20 FE 2022',
        imageAddress: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-fe-5g.jpg",
        quantity: 1
    }],
    numberOfItems: 1
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
                name: action.payload.name,
                quantity: action.payload.quantity
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
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id !== action.payload.itemId) {
                    newItemsArray.push(state.items[i])

                }
            }

            return ({
                ...state,
                items: newItemsArray,
                numberOfItems: newItemsArray.length
            })
        },

        updateQuantity: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.id) {
                    if (action.payload.action === 'plus') { state.items[i].quantity += 1 }

                    if (action.payload.action === 'minus') {
                        if (state.items[i].quantity > 1) {
                            state.items[i].quantity -= 1
                        }
                    }
                }
            }
        }
    }
})



export const { addItem, removeItem, updateQuantity } = shoppingCartReducer.actions;
export default shoppingCartReducer.reducer;