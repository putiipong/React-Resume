import { useHistory } from "react-router-dom";
import React from "react";
import hellologo from "../Image/hello.png";
import Ilogo from "../Image/Ilogo.png";
export default function WelcomePage() {
  let history = useHistory();
  function handleNextClick() {
    history.push("/home");
  }
  return (
    <div className="bg">
      <div className="WelcomePageBox">
        <div className="WelcomePage-Text-Im">
          <img className="Ilogo" src={Ilogo} width="70px" height="76px" />
          <h1>'m</h1>
        </div>
        <div>
          <div className="ImageHello">
            <img src={hellologo} alt="Hello" width="48px" height="48px" />
          </div>
          <div className="WelcomePage-Text-Name">
            <h2 className="name">Putipong Moramontree</h2>
          </div>
          <div className="WelcomePage-Text-Career">
            <h4>FRONTEND DEVELOPER</h4>
          </div>
        </div>
      </div>
      <div>
        <button className="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
