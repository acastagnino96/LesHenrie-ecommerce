import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({defalultValue =[], children}) => {
    const [cartList, setCartList] = useState(defalultValue);

    const removeList = () => {
        setCartList([]);
    }

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([...cartList,{ idItem: item.id, imgItem: item.img, costItem: item.precio, titleItem: item.nombre, qtyItem: qty }
            ]);
        } else {
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let cantidad = 0
        cartList.forEach((item) => cantidad = cantidad + item.qtyItem)
        return cantidad;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, calcTotalPerItem, calcSubTotal, calcTotal, calcItemsQty}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;