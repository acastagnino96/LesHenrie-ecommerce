import React from 'react';
import "./Opening.css";
import { Link } from 'react-router-dom'
import centralLogo from "../src/assets/images/centralLogo.svg";

export default function Opening() {
    return (
        <main className="opening">
            <div className="imagenPpal">
                <img className="centralLogo" src = "../src/assets/images/centralLogo.svg" alt="Logo"/>
            </div>
            <h1 id="nosotras">¿Quiénes somos?</h1>
            <div className="aboutUs d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center">
                <img className="joseYana w-lg-50" src = "../src/assets/images/joseYana.png" alt="Foto"/>
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
