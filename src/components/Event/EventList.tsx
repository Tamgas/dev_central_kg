import React from "react";
import { Link } from "react-router-dom";

interface EventProps {
  location: string;
  name: string;
  organization_name: string;
  date: string;
  cover: { type: string; url: string }[];
}

const EventList: React.FC<EventProps> = ({
  location,
  name,
  organization_name,
  date,
  cover,
}) => {
  const date1 = new Date(date);
  const year = date1.getFullYear();
  const month = date1.toLocaleString("default", { month: "long" });
  const day = date1.getDate();
  const hours = date1.getHours();
  const minutes = date1.getMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const getCover = (
    cover: { type: string; url: string }[]
  ): { type: string; url: string }[] => {
    return cover.length > 0
      ? cover
      : [
          {
            type: "default",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4ZfzLnbDwiQr9SYOuck0IIsfgX1yRb3PLw&s",
          },
        ];
  };

  const coverWithDefault = getCover(cover);

  return (
    <Link to={"/detailEvents"}>
      <div className="events">
        <div className="events--foto">
          {coverWithDefault.map((icon, index) => (
            <img key={index} src={icon.url} alt="cover" />
          ))}
          <div className="events--foto__text">
            <h4>
              {day} {month} {year}{" "}
              <span>
                {formattedHours}:{formattedMinutes}
              </span>
            </h4>
            <h1>{name}</h1>

            <div className="events--foto__text--par">
              <div className="events--foto__text--par__org">
                <h6>Организатор</h6>
                <h2>{organization_name}</h2>
              </div>
              <div className="events--foto__text--par__loc">
                <h6>Когда</h6>
                <h2>{location}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventList;
