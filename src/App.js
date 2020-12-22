import React from "react";
import "./App.css";
import Bet from "./components/Bet";
import "./App.css";
import confirmed from "./assets/images/confirmed.svg";
import wait from "./assets/images/wait.svg";
import paid from "./assets/images/paid.svg";
import prev from "./assets/images/prev.svg";
import stop from "./assets/images/stop.svg";

const App = () => {
  const [showInfo, setShowInfo] = React.useState({
    "071": false,
    "072": false,
    "073": false,
    "074": false,
    "075": false,
    "076": false,
    "077": false,
    "078": false,
    "079": false,
    "080": false,
    "081": false,
    "082": false,
    "083": false,
    "084": false,
    "085": false,
    "086": false,
    "087": false,
  });

  const handleClick = (e) => {
    const currentBet = e.currentTarget.getAttribute("id");
    setShowInfo({ ...showInfo, [currentBet]: !showInfo[currentBet] });
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="bets">
          <h1 className="bets__header">Bets</h1>
          <Bet
            id="088"
            offside={"Offside"}
            freeKick={"Free Kick or "}
            goalKick={"Goal Kick"}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={confirmed}
          />
          <Bet
            id="087"
            goal={"Goal"}
            goalKick={"Goal Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={wait}
          />
          <Bet
            id="086"
            goal={"Goal"}
            winning={true}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={paid}
          />
          <Bet
            id="085"
            offside={"Offside"}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={prev}
          />
          <Bet
            id="084"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="083"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="082"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="081"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="080"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="079"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="078"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="077"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="076"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="075"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="074"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="073"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="072"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
          <Bet
            id="071"
            freeKick={"Free Kick"}
            cornerKick={"Corner Kick or "}
            winning={false}
            showInfo={showInfo}
            handleClick={handleClick}
            icon={stop}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
