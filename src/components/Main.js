import React from "react";
import penPath from '../images/Edit-Button.svg';
import plusPath from '../images/plus.svg';
import closeIconPath from '../images/Close-Icon.png';
import api from '../utils/Api';
import Card from "./Card";

let userId;
let cardsList =[];

function Main(props) {
    const [userName, setUserName] = React.useState("Gbjyt");
    const [userDescription, setUserDescription] = React.useState("dkfjbglsudbg;vudnx;lb");
    const [userAvatar, setUserAvatar] = React.useState("../images/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg");
    const [cards, setCards] = React.useState([]);

    const promises = [api.getUser(), api.getCards()];

    const getInfo = Promise.all(promises);



    React.useEffect(() => {

        getInfo
            .then(([userData, cards]) => {
                userId = userData._id;
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                cardsList = cards;
                console.log(cardsList);
            }
            )
            .catch((err) => console.log("Ошибка запроса данных о пользователе ", err));
    }, [])

  

    return (
        <main>
            <section className="profile" aria-label="Профиль пользователя">
                <div className="profile__section-avatar">
                    <img src={userAvatar} className="profile__avatar"
                        alt="Фото пользователя" />
                    <div className="profile__overlay" onClick={props.onEditAvatar}>
                    </div>
                </div>
                <div className="profile__info">
                    <div className="profile__info-wrapper">
                        <h1 className="profile__info-name">{userName}</h1>
                        <button className="profile__info-edit-button button" type="button"
                            aria-label="Редактировать профиль" onClick={props.onEditProfile}>
                            <img src={penPath} className="profile__info-button-img"
                                alt="Изображение карандаша" />
                        </button>
                    </div>
                    <h2 className="profile__info-profession">{userDescription}</h2>
                </div>
                <button className="profile__add-button button" type="button" aria-label="Добавить фото" onClick={props.onAddPlace}>
                    <img src={plusPath} className="profile__add-button-img" alt="Плюс" />
                </button>
            </section>

            <section className="elements" aria-label="Живописные места России">
                <ul className="elements__list">
                    {
                       cardsList.map((card) =>
                       <Card 
                     key={card._id}
                     link = {card.link}
                     name = {card.name}
                     like= {card['likes']}
                    onCardClick={props.onCardClick}
                     />
                       )
                  }
                </ul>
            </section>
        </main>
    );

}

export default Main;