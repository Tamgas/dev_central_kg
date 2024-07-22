import React from "react";

const DetailOrganization = () => {
  return (
    <div className="">
      <div id="detail">
        <div className="container">
          <div className="detail">
            <div className="detail--head">
              <img
                src="https://devkg.com/images/organizations/88ba3e55ab38d5fe5c710cb8aede1e6f.webp"
                alt="img"
              />
              <h1>MBank</h1>
            </div>
            <h3>Веб-сайт</h3>
            <h2>mbank.kg</h2>
            <h3>Описание</h3>
            <div className="detail--text">
              MBANK - лучший мобильный банкинг в Кыргызстане. Наша команда
              состоит из более 2000 профессионалов, которые занимаются цифровой
              трансформацией и внедрением новых банковских технологий. Мы ищем
              лучших специалистов, чтобы вместе создавать уникальный продукт и
              создать лучший сервис для наших клиентов. Если вы готовы к новому
              вызову и хотите присоединиться к нам, свяжитесь с нами!
            </div>
            <h4>Мероприятия</h4>
            <div className="detail--events">
              <div className="detail--events__event">
                <img
                  src="https://devkg.com/images/events/e4c330df305d20ba0e1eff982d2b5ba3.webp"
                  alt="img"
                />
                <div className="detail--events__event--text">
                  <h5>
                    29 июня 2022 <span>17:00</span>
                  </h5>
                  <h1>Мастер-класс от Романа Кононова</h1>
                  <div className="detail--events__event--text__location">
                    <div className="detail--events__event--text__location--row">
                      <h3>Организатор</h3>
                      <h2>MBank</h2>
                    </div>
                    <div className="detail--events__event--text__location--row">
                      <h3>Локация</h3>
                      <h2>пр. Чуй,265/1</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOrganization;
