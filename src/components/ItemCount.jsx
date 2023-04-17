import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./ItemCount.css";

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div className="productAmountContainer">
            <Button className="botonContador" onClick={decrement}>-</Button>
            <div className="productAmount">{count}</div>
            <Button className="botonContador" onClick={increment}>+</Button>
            
            {
                stock && count
                ? <Button className="botonContador agregarContador" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button className="botonContador agregarContador" disabled>Agregar al carrito</Button>
            }
            
        </div>
    );
}

export default ItemCount;