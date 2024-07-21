import React from "react";
import { useNavigate } from "react-router-dom";

const JobsList = ({
  companyName = "",
  jobTitle = "",
  paymentType = "",
  priceFrom = 0,
  priceTo = 0,
  type = "",
  city = "",
  currency = "",
  salary = "",
  organization_icon = [],
}: {
  companyName: string;
  jobTitle: string;
  paymentType: string;
  priceFrom: number;
  priceTo: number;
  type: string;
  city: string;
  currency: string;
  salary: string;
  organization_icon: {
    type: string;
    url: string;
  }[];
}) => {
  const nav = useNavigate();
  return (
    <div className="jobs-item content">
      <div className="jobs-item-field icon">
        <div className="preview images">
          <picture>
            {organization_icon.map((icon, index) => (
              <img key={index} src={icon.url} alt="Organization Icon" />
            ))}
          </picture>
        </div>
      </div>
      <div className="information">
        <div
          className="jobs-item-field company"
          onClick={() => nav("/detailVacancy")}
        >
          <span className="label">Компания</span>
          {companyName}
        </div>
        <div
          className="jobs-item-field position"
          onClick={() => nav("/detailVacancy")}
        >
          <span className="label">Должность</span>
          {jobTitle}
        </div>
        <div
          className="jobs-item-field price"
          onClick={() => nav("/detailVacancy")}
        >
          <span className="label">Оклад</span>
          {`От ${priceFrom} в ${priceTo} ${currency} ${salary} `}
        </div>
        <div
          className="jobs-item-field type"
          onClick={() => nav("/detailVacancy")}
        >
          <span className="label">Тип</span>
          {`${type} / ${city}`}
        </div>
      </div>
    </div>
  );
};

export default JobsList;
