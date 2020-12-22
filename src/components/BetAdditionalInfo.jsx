import React from "react";
import "./BetAdditionalInfo.css"
const BetAdditionalInfo = ({ time, status, money, coeff, icon }) => {
  return (
    <div className="additional-info__item">
      <p className="additional-info__time">{time}</p>
      <p className="additional-info__status">{status}</p>
      <p className="additional-info__money text">{money} &euro;</p>
      <p className="additional-info__coeff text">{coeff}</p>
      <img
        src={icon}
        alt="icon of additional info bet's status"
        className="additional-info__icon"
      />
    </div>
  );
};

export default BetAdditionalInfo;
