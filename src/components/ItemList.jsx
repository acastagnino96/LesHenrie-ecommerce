import React from 'react'
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({items}) => {
  return (
    <div className="productsContainer">
      <div className="textoTienda">
        <h1>La Tienda</h1>
        <p>Les presentamos la más delicada pastelería hecha a medida, cositas dulces de la más alta calidad, para tentarte desde el primer vistazo hasta el último mordisco.</p>
      </div>
    {
        items.length > 0
        ? items.map(item => <Item key={item.id} {...item} />)
        : <p>Cargando...</p>
    }
    </div>
  )
}

export default ItemList;
