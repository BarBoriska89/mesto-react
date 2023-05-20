import React from "react";
import PopupWithForm from "./PopupWithForm ";

function AddPlacePopup({ isOpen, onClose }) {
    function handleChange() {

    }

    return (

        <PopupWithForm isOpen={isOpen}
            onClose={onClose}
            title={"Новое место"}
            name={"add-place"}
            buttonText={"Создать"}
        >
            <div className="popup__form-section">
                <input type="text" placeholder="Название" className="popup__input popup__input_type_place"
                    name="place-title" id="place-name" minLength="2" maxLength="30" required onChange={handleChange} />
                <span className="popup__error" id="place-title-error"></span>
            </div>
            <div className="popup__form-section">
                <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-img"
                    name="place-img" id="url-for-img" required onChange={handleChange} />
                <span className="popup__error" id="url-for-img-error"></span>
            </div>

        </PopupWithForm>
    );
}
export default AddPlacePopup;