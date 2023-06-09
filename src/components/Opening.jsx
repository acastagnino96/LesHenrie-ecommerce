import React from 'react';
import "./Opening.css";
import { Link } from 'react-router-dom';

export default function Opening() {
    return (
        <main className="opening">
            <div className="imagenPpal">
                <img className="centralLogo" src= "https://firebasestorage.googleapis.com/v0/b/leshenri-ecomm.appspot.com/o/centralLogo.svg?alt=media&token=13ae2304-dd20-4b4e-ba64-ebd4c7b3b2ca" alt="Logo"/>
            </div>
            <h1 id="nosotras">¿Quiénes somos?</h1>
            <div className="aboutUs d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center">
                <img className="joseYana w-lg-50" src = "https://firebasestorage.googleapis.com/v0/b/leshenri-ecomm.appspot.com/o/joseYana.png?alt=media&token=329ea63e-1bd5-4a54-a34d-9c46f463b80b" alt="Foto"/>
                <p className='text-center text-lg-start w-lg-50'>Allô! Somos Ana y Josefina Heinrich. <br />Somos dos primas que, ya un poco más crecidas, decidimos dar vida a nuestros “restaurantes” que armábamos desde muy chicas en la cocina. <br /><br />Unimos nuestra pasión por la pastelería con el amor por el diseño y las cosas lindas de la vida, y así surgió <span>"Les Henrí Pâtisserie Boutique"</span>.</p>
            </div>
            <div className="redBar d-sm-flex align-items-sm-center justify-content-sm-center">
                <p>Animate.</p>
                <p>Probá.</p>
                <p>Regalá.</p>
            </div>
            <div className="irALaTienda">
                <Link to={"/products"} className="btn" id="btnHover">¡Ir a la tienda!</Link>
            </div>
        </main>
    )
}
