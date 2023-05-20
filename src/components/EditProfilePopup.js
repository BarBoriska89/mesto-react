import React from "react";
import PopupWithForm from "./PopupWithForm ";

function EditProfilePopup({ isOpen, onClose }) {

    function handleChange() {

    }

    return (
        <PopupWithForm isOpen={isOpen}
            onClose={onClose}
            title={"Редактировать профиль"}
            name={"edit-profile"}
            buttonText={"Сохранить"}
        >

            <div className="popup__form-section">
                <input type="text" value="Имя" className="popup__input popup__input_type_name" name="user-name"
                    id="user-name" minLength="2" maxLength="40" required onChange={handleChange} />
                <span className="popup__error" id="user-name-error"></span>
            </div>
            <div className="popup__form-section">
                <input type="text" value="Род деятельности" className="popup__input popup__input_type_profession"
                    name="user-job" id="user-job" minLength="2" maxLength="200" required onChange={handleChange} />
                <span className="popup__error" id="user-job-error"></span>
            </div>

        </PopupWithForm>


    );
}
export default EditProfilePopup;