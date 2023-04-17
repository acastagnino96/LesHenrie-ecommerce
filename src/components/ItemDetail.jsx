import React from 'react';
import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState (0)
    
    const ctx = useContext(CartContext);

    function swalqty (qty) {
        const swalQty = withReactContent(Swal)
        if (qty > 1) {
            swalQty.fire({
                title: `Seleccionaste ${qty} items`,
                })
        } else {
            swalQty.fire({
                title: `Seleccionaste ${qty} item`,
                })
        }
    } 

    const onAdd = (qty) => {
        if ((qty) > 0) {
        swalqty(qty)
        setItemCount(qty);
        ctx.addToCart(item, qty);
    }}

    return (
        <>
        {
            item && item.img
            ? 
            <div>
                <div className="wrapperDetail">
                    <div className="imgContainer">
                        <img className="imageDetail" src={item.img} />
                    </div>
                    <div className="infoContainer">
                        <div className="titleDetail">{item.nombre}</div>
                        <div className="descDetail">{item.tipo}</div>
                        <div className="priceDetail">$ {item.precio}</div>
                        <div className="descDetail">{item.stock} unidades en stock</div>
                    </div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button>Ir al carrito</Button></Link>
                    }
                </div>
            </div>
            : <p id="cargando">Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;