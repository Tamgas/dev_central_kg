import React from "react";
import { useNavigate } from "react-router-dom";

function Organizasii() {
  const nav = useNavigate();
  return (
    <div id="organizasii">
      <div className="container">
        <div className="organizasii">
          <div className="organizasii--cards">
            <div className="organizasii--cards__card">
              <div className="organizasii--cards__card--title">
                <img
                  src="https://devkg.com/images/organizations/88ba3e55ab38d5fe5c710cb8aede1e6f.webp"
                  alt="img"
                />
                <div className="organizasii--cards__card--title__company">
                  <h3>Компания</h3>
                  <h2 onClick={() => nav("/detailO")}>MBank</h2>
                </div>
              </div>
              <div className="organizasii--cards__card--about">
                <div className="organizasii--cards__card--about__block">
                  <h3>Вакансии</h3>
                  <h2>166</h2>
                </div>
                <div className="organizasii--cards__card--about__block">
                  <h3>Мероприятия</h3>
                  <h2>1</h2>
                </div>
                <div className="organizasii--cards__card--about__block">
                  <h3>Видео</h3>
                  <h2>0</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="organizasii--btn">
            <button>Следующая страница</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organizasii;
