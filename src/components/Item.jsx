import React from 'react';
import "./Item.css";
import {Link} from "react-router-dom";

const Item = ({ id, nombre, precio, stock, img }) => {
  return (
    <div className= "productContainer">
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
        <div className="info">
            <div id="iname">{nombre}</div>
            <div className="icon" id="iprice">
                <strong>$ {precio}</strong>
            </div>
            <div className="icon" id="istock">
                {stock} unid.
            </div>
            <div className="icon" id="idata" style={{cursor: "pointer"}}>
                    <Link id="idataWord" to={`/item/${id}`}>Ver más</Link>
            </div>
        </div>
    </div>
  );
}

export default Item;
