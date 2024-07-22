import React, { useState } from 'react';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from '../Modal';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <div id="header">
            <div className="container">
                <div className="main-header">
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

                    <div className="my-btn">
                        <div className="menu" onClick={openModal}>
                            <GiHamburgerMenu />
                        </div>
                        <button className='icon-btn'><FaArrowRightToBracket /></button>
                        <button className="login-button">Войти</button>
                    </div>
                </div>
            </div>
            <Modal show={modalVisible} handleClose={closeModal} />
        </div>
    );
};

export default Header;
