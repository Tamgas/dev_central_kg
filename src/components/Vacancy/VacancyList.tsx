import React from "react";
import { useNavigate } from "react-router-dom";

const VacancyList = ({
  companyName = '',
  jobTitle = '',
  paymentType = '',
  priceFrom = 0,
  priceTo = 0,
  type = '',
  city = '',
  currency = '',
  salary = ''
} : {
  companyName: string;
  jobTitle: string;
  paymentType: string;
  priceFrom: number;
  priceTo: number;
  type: string;
  city: string;
  currency: string;
  salary: string
}) =>{
  const nav = useNavigate();


  return (
    <div className="vacancy--job" onClick={() => nav("/detailVacancy")}>
            <div className="vacancy--job__title">
              <div className="vacancy--job__title--com">
                <img
                  src="https://devkg.com/images/organizations/886e28d889f4c24ea73c66b80174110f.webp"
                  alt=""
                />
                <div className="" onClick={() => nav("/detailVacancy")}>
                  <h4>Компания</h4>
                  <p>{companyName}</p>
                </div>
              </div>
            </div>
            <div
              className="vacancy--job__title"
              onClick={() => nav("/detailVacancy")}
            >
              <h4>Должность</h4>
              <p>{jobTitle}</p>
            </div>
            <div
              className="vacancy--job__title"
              onClick={() => nav("/detailVacancy")}
            >
              <h4>Оклад</h4>
              <p>{ `От ${priceFrom} в ${priceTo} ${currency} ${salary} `}
              </p>
            </div>
            <div
              className="vacancy--job__title"
              onClick={() => nav("/detailVacancy")}
            >
              <h4>Тип</h4>
              <p>{`${type} / ${city}`}
              </p>
            </div>
          </div>
  );
};

export default VacancyList