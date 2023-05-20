import React from "react";
import PopupWithForm from "./PopupWithForm ";

function EditAvatarPopup({ isOpen, onClose }) {

    function handleChange() {

    }

    return (
        <PopupWithForm isOpen={isOpen}
            onClose={onClose}
            title={"Обновить аватар"}
            name={"edit-avatar"}
            buttonText={"Сохранить"}
        >

            <div className="popup__form-section">
                <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-img"
                    name="avatar-img" id="url-for-avatar-img" required onChange={handleChange} />
                <span className="popup__error" id="url-for-avatar-img-error"></span>
            </div>

        </PopupWithForm>

    );
}

export default EditAvatarPopup;