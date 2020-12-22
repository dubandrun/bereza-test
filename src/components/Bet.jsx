import React from "react";
import "./Bet.css";
import BetInfo from "./BetInfo";

const Bet = ({
  id,
  icon,
  handleClick,
  showInfo,
  winning,
  offside,
  freeKick,
  goalKick,
  cornerKick,
  goal,
}) => {
  return (
    <div id={id} className="bet text" onClick={handleClick}>
      <div className="bet__main-info">
        <div className="bet__info">
          <p className={"bet__id" + (winning ? " winning" : "")}>id {id}</p>
          <p className={"bet__time" + (winning ? " winning" : "")}>18:53:36</p>
        </div>
        <div className="bet__description">
          <p className="bet__event">
            {offside && <span className="bet__offside">{offside} </span>}
            {offside && freeKick && goalKick && (
              <>
                {freeKick.slice(-4)}
                <span className="bet__free-kick">{freeKick.slice(0, -4)}</span>
                {freeKick.slice(-4)}
                <span className="bet__goal-kick">{goalKick}</span>
              </>
            )}
            {goal && <span className="bet__goal">{goal}</span>}
            {goal && goalKick && (
              <>
                {goalKick.slice(-4)}
                <span className="bet__goal-kick">{goalKick.slice(0, -4)}</span>
              </>
            )}
            {freeKick && cornerKick && (
              <>
                <span className="bet__free-kick">{freeKick}</span>
                {cornerKick.slice(-4)}
                <span className="bet__corner-kick">
                  {cornerKick.slice(0, -4)}{" "}
                </span>
              </>
            )}
          </p>
          <div className={"bet__money-info" + (winning ? " winning" : "")}>
            <p className="bet__size">Bet:1000.00 &euro;</p>
            <p className="bet__paid"> Paid:2700.32 &euro;</p>
          </div>
        </div>
        <div className="bet__status">
          <img src={icon} alt="icon of bet's status" className="bet__icon" />
          <p className={"bet__coeff" + (winning ? " winning" : "")}>2.7</p>
        </div>
      </div>
      <div className="bet__additional-info">{showInfo[id] && <BetInfo />}</div>
    </div>
  );
};

export default Bet;
