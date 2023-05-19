import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <li className="element">
            <img className="element__img" src={props.link} alt={props.name} onClick={handleClick} />
            <button className="element__trash" type="button" aria-label="Удалить">
            </button>
            <div className="element__caption">
                <h2 className="element__text">{props.name}</h2>
                <div className="section__like">
                    <button className="element__like" type="button" aria-label="Нравится">
                    </button>
                    <span className="element__like-count">{props.like.length}</span>
                </div>
            </div>
        </li>
    );
}
export default Card;