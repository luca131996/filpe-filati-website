import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import spun_img from "../images/spun.jpg"
import core_img from "../images/core.jpg"
import fast_img from "../images/fast.jpg"
import extra_img from "../images/extra.png"

function Cards()
{
    return(
    <div className="cards">
        <h1>Eccellenza Tessile Italiana dal 1978. Scopri i nostri prodotti!</h1>
        <div className="cards_container">
            <div className="cards_wrapper">
                <il className="cards__items">
                    <CardItem
                    src = {spun_img}
                    text = "Cucirino 100% Poliestere"                    
                    label = "SPUN"
                    path= '/prodotti/1'
                    />
                    <CardItem
                    src = {core_img}
                    text = "Cucirino Poly Poly"
                    label = "CORE"
                    path= '/prodotti/3'
                    />
                    <CardItem
                    src = {fast_img}
                    text = "Cucirino 100% PES H.T."
                    label = "FAST"
                    path= '/prodotti'
                    />
                    <CardItem
                    src = {extra_img}
                    text = "100% Cotone Pronto per Tinta"
                    label = "EXTRA"
                    path= '/prodotti'
                    />
                </il>
            </div>

        </div>
    </div>
    );
}

export default Cards;