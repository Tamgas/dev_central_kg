import React from "react";
import event from "../../images/events.webp"
function Meropriatia() {
  return (
    <div id="event">
      <div className="container">
          <div className="btn">
            <button className="btn2">Добавит мероприятия</button>
          </div>
          <div className="event">
            <div className="event--foto">
               <img src={event} alt="img" />  
          </div>
         
              <div className="event--text">
               <h4>
                11 июля 2024 <span>17:30</span>
               </h4>
              <h2> Arch+Ops: цифры в нагрузке и процессах </h2>
            </div>
             
            <div className="text--event">
              <h6>Организатор</h6>
              <h6>Локация</h6>
            </div>
            </div>
           <div className="text">
            <h4>JUG Ru Group</h4>
            <h4>Онлайн</h4>
           </div>
           
          </div>
    </div>
  );
}

export default Meropriatia;
