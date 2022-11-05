import React from "react";
import { Link } from "react-router-dom";

function CardItem(props)
{
    return(
    <>
        <li className="cards_item">
            <Link className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img 
                    className="cards__item__img"
                    src={props.src} 
                    alt="Yarn Image"
                    />
                </figure>
                <div className="cards__item__info">
                    <>
                    <h1 className="cards__item__text">{props.text}</h1>
                    <h1 className="cards__item__text">{props.subtext}</h1>
                    </>
                </div>
            </Link>
        </li>
    </>
    );
}

export default CardItem;