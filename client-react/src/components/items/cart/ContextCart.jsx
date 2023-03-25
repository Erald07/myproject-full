import { createContext, useEffect, useState } from "react";

export const ContextCart = createContext({});

const CartProvider = (props) => {
    const {data} = props;
    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const items = data.filter( item => {
            return item.id === id
        })
        setCart(current => [...current, ...items])
    }

    // console.log(cart);
    return(
        <ContextCart.Provider value={{addCart, cart}}>
            {props.children}
        </ContextCart.Provider>
    );
}

export default CartProvider;