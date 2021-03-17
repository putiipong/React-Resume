import { useHistory } from "react-router-dom";
import React from "react";
import hellologo from "../Image/hello.png";
import Ilogo from "../Image/Ilogo.png";
import facebook from "../Image/facebook.png";
import IG from "../Image/instagram.png";
import Line from "../Image/line-logo.png";
import Phone from "../Image/phone-call.png";
import Email from "../Image/email.png";

export default function WelcomePage() {
  let history = useHistory();

  function handleResumeClick() {
    history.push("/home");
  }

  return (
    <div className="bg">
      <div className="WelcomePageBox">
        <div className="WelcomePage-Text-Im">
          <img
            className="Ilogo"
            src={Ilogo}
            alt="I"
            width="70px"
            height="76px"
          />
          <h1>'m</h1>
        </div>
        <div className="header">
          <div className="ImageHello">
            <img src={hellologo} alt="Hello" width="48px" height="48px" />
          </div>
          <div className="WelcomePage-Text-Name">
            <h2 className="name">Putipong Moramontree</h2>
          </div>
          <div className="WelcomePage-Text-Career">
            <h3>FRONTEND DEVELOPER</h3>
          </div>
        </div>
      </div>
      <div className="LogoSocial">
        <img src={facebook} style={{ margin: "5px" }} />
        <img src={IG} style={{ margin: "5px" }} />
        <img src={Line} style={{ margin: "5px" }} />
        <img src={Phone} style={{ margin: "5px" }} />
        <img src={Email} style={{ margin: "5px" }} />
      </div>
      <div>dddd</div>
    </div>
  );
}
