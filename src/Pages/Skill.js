import htmllogo from "../Image/html.png";
import csslogo from "../Image/css.png";
import javascriptlogo from "../Image/js-format.png";
import Reactlogo from "../Image/React.png";
import tagskill from "../Image/tagskill.png";
import endtagskill from "../Image/endtagskill.png";
export default function Skill() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "80px",
        }}
      >
        <h4>{"<SKILL>"}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={endtagskill} height="98px" style={{ marginLeft: "80px" }} />
        <img src={htmllogo} height="98px" />
        <img src={csslogo} height="98px" />
        <img src={javascriptlogo} height="98px" />
        <img src={Reactlogo} height="98px" />
        <img src={tagskill} height="98px" style={{ marginRight: "80px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "80px",
        }}
      >
        <h4>{"</SKILL>"}</h4>
      </div>
    </div>
  );
}
