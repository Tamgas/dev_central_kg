import React from 'react';
import { Link } from 'react-router-dom';

interface ModalProps {
    show: boolean;
    handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <img src="https://devkg.com/js/img/logo.458f2cd.svg" alt="img" />
                <nav>
                <Link to={'/'}>
                        Вакансии
                        </Link>
                        <Link to={'/events'}>
                        Мероприятия
                        </Link>
                        <Link to={'/meetups'}>
                        Видео
                        </Link>
                        <Link to={'/organizations'}>
                        Организация
                        </Link>
                        <Link to={'/community'}>
                        Сообщество
                        </Link>
                </nav>
            </div>
        </div>
    );
};

export default Modal;
