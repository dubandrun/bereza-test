import React from "react";
import wait from "../assets/images/wait.svg";
import confirmed from "../assets/images/conf.svg";
import pay from "../assets/images/pay.svg";
import "./BetInfo.css";
import BetAdditionalInfo from "./BetAdditionalInfo";

const BetInfo = () => {
  return (
    <div className="additional-info__items text">
      <BetAdditionalInfo
        time={"18:53:36"}
        status={"Bet Win"}
        money={"+2500"}
        coeff={"25.5"}
        icon={pay}
      />
      <BetAdditionalInfo
        time={"18:53:36"}
        status={"Bet Accepted"}
        money={"0"}
        coeff={"3.54"}
        icon={confirmed}
      />
      <BetAdditionalInfo
        time={"18:53:36"}
        status={"Bet Received"}
        money={"-100"}
        coeff={"3.54"}
        icon={wait}
      />
    </div>
  );
};

export default BetInfo;
