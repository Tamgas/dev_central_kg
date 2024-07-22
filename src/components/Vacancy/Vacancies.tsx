import VacancyList from "./VacancyList";
import useFetch from "../../hooks/useFetch";

export const Vacancies = () => {
  const { data, loading } = useFetch();
console.log(data);

  if (loading || !data) {
    return <div>Загрузка...</div>;
  }

  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vacancy--btn">
            <button>Добавить вакансию</button>
          </div>
          {data &&
                  data.map((job: any, index: number) => {
                    return (
                      <VacancyList
                        key={index}
                        companyName={job.organization_name}
                        jobTitle={job.position}
                        paymentType={job.paymentType}
                        priceFrom={job.price_from}
                        priceTo={job.price_to}
                        type={job.type}
                        city={job.city}
                        currency={job.currency}
                        salary={job.salary}
                      />
                    );
                  })}
          <div className="vacancy--btn2">
            <button>Следующая страница</button>
          </div>
        </div>
      </div>
    </div>
  );
};
