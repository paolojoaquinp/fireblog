import { useState } from "react";
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState<any>(initialState);
    const changePhoto = (payload: string) => {
        setState({
            ...state,
            user: {
                ...state.user,
                foto: payload
            }
        });
    }

/*     const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter((_item, indexCurrent) => {
                return indexCurrent != indexToRemove;
            }),
        });
    }

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload],
        })
    } */
    return {
/*         addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder, */
        changePhoto,
        state,
    };
};

export default useInitialState;