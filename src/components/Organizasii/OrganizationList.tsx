import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizationList = ({
  icon = [],
  name = "",
  jobs_count = 0,
  meetups_count = 0,
  events_count = 0,
}: {
  icon: {
    type: string;
    url: string;
  }[];
  name: string;
  jobs_count: number;
  meetups_count: number;
  events_count: number;
}) => {
  const getIcon = (
    icon: { type: string; url: string }[]
  ): { type: string; url: string }[] => {
    return icon.length > 0
      ? icon
      : [
          {
            type: "default",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pSEcKl6Bqv6qLJapdSxcF2oherXUSwWLTw&s",
          },
        ];
  };

  const iconWithDefault = getIcon(icon);

  const nav = useNavigate();

  return (
    <div className="organizasii--cards__card" onClick={() => nav("/detailO")}>
      <div className="organizasii--cards__card--title">
        {iconWithDefault.map((icon, index) => (
          <img key={index} src={icon.url} alt="Icon" />
        ))}
        <div className="organizasii--cards__card--title__company">
          <h3>Компания</h3>
          <h2>{name}</h2>
        </div>
      </div>
      <div className="organizasii--cards__card--about">
        <div className="organizasii--cards__card--about__block">
          <h3>Вакансии</h3>
          <h2>{jobs_count}</h2>
        </div>
        <div className="organizasii--cards__card--about__block">
          <h3>Мероприятия</h3>
          <h2>{events_count}</h2>
        </div>
        <div className="organizasii--cards__card--about__block">
          <h3>Видео</h3>
          <h2>{meetups_count}</h2>
        </div>
      </div>
    </div>
  );
};

export default OrganizationList;
