import React from "react";
import OrganizationList from "./OrganizationList";
import useFetch from "../../hooks/useFetch";

function Organizasii() {
  const { data, loading } = useFetch({
    url: "http://3.38.98.134/organizations",
  });

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  console.log(data);

  return (
    <div id="organizasii">
      <div className="container">
        <div className="organizasii">
          <div className="organizasii--cards">
            {data &&
              data.map((el: any, index: number) => {
                return (
                  <OrganizationList
                    icon={el.icon_formats}
                    key={index}
                    name={el.name}
                    jobs_count={el.jobs_count}
                    meetups_count={el.meetups_count}
                    events_count={el.events_count}
                  />
                );
              })}
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
