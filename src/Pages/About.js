import Picture from "../Image/Jack_cover.jpg";
export default function About() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "80px",
        }}
      >
        <h4>{"<ABOUT ME>"}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Picture} width="380px"></img>
        <div style={{ margin: "50px" }}>
          <p>
            I'm a developer and bio medical engineer.
            <br />I was born 1996 and grew up in Bangkok.
            <br /> I graduated a Bachelor degree in Industrial Physics and
            Medical Instrument.
            <br />I have skill for developer from CodeCamp Thai Programmer.
            <br />I can written code HTML CSS JAVASCRIPT REACT.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "80px",
        }}
      >
        <h4>{"</ABOUT ME>"}</h4>
      </div>
    </div>
  );
}
