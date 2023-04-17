import React from "react";
import { BsSkype, BsFacebook } from 'react-icons/bs';
import "./Footer.css";

export default function Footer() {
    return (
        <section className="footers">
            <div className="pt-2 d-flex justify-content-center text-light">
                <BsSkype className="m-1"/>
                <BsFacebook className="m-1"/>
            </div>
            <div className="px-4 pt-1 d-flex justify-content-center text-light">
                <p>Todos los derechos resevados.</p>
            </div>
        </section>
    )
}