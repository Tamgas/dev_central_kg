import React from "react";
import img from '../../images/video.webp'
function Videoo() {
  return (
    <div id="video">
      <div className="container">
        <div className="btn">
          <button>Добавить видео</button>
        </div>
        <div className="video--text">
           <h2>Все видео</h2>
         </div>
         <div className="text">
          <div className="video--img">
         <img src={img} alt="img" />
         </div>
         </div>
         <div className="text--video">
          <div className="video-text1">
          <h1>Кибирд (Keybread) <br />
          #43 - Синдиром <br />
          Самозваница в IT 2023 <br />
          (feat. Даниил <br/>
         Вартанов )
          </h1>
           </div>
          <div className="video--dev">
          <h5>Организатор</h5>
          <h5>Когда</h5>
         </div>
             <div className="video--dev1">
          <h2>Mad Devs</h2>
          <h2>30 август 2023</h2>
         </div>
         </div>
         
        

        
       
        
        
      </div>
    </div>
  );
}

export default Videoo;
