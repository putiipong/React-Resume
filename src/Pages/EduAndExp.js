export default function EducationAndExpirence() {
  return (
    <div className="EduandExp" style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "80px",
          }}
        >
          <h4>{"<EDUCATION>"}</h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "110px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                borderRight: "2px dashed white",
                paddingRight: "30px",
                marginRight: "20px",
              }}
            >
              <h5>
                AUG
                <br />
                2014
                <br />-<br />
                AUG
                <br />
                2018{" "}
              </h5>
            </div>
            <div>
              <h5>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</h5>
              <h6>
                FACULTY OF APPLIED SCIENCE
                <br />
                INDUSTRIAL PHYSICS AND MEDICAL INSTUMENTATION
              </h6>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div
              style={{
                borderRight: "2px dashed white",
                paddingRight: "30px",
                marginRight: "20px",
              }}
            >
              <h5>
                AUG
                <br />
                2010
                <br />-<br />
                AUG
                <br />
                2014{" "}
              </h5>
            </div>
            <div>
              <h5>NONTHABURI TECHNICAL COLLEGE</h5>
              <h6>
                VOCATIONAL CERTIFICATE
                <br />
                Electrical Power
              </h6>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <h4>{"</EDUCATION>"}</h4>
        </div>
      </div>

      <div
        style={{
          // borderLeft: "2px solid white",
          marginLeft: "20px",
          paddingLeft: "50px",
        }}
      >
        <div>
          <h4>{"<EXPERIENCE>"}</h4>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div
              style={{
                borderRight: "2px dashed white",
                paddingRight: "30px",
                marginRight: "20px",
              }}
            >
              <h5>
                NOV
                <br />
                2020
                <br />-<br />
                PRE
                <br />
                SENT
              </h5>
            </div>
            <div>
              <h5>Foreman</h5>
              <h5>Decoration line 2009</h5>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div
              style={{
                borderRight: "2px dashed white",
                paddingRight: "30px",
                marginRight: "20px",
              }}
            >
              <h5>
                APR
                <br />
                2020
                <br />-<br />
                NOV
                <br />
                2020{" "}
              </h5>
            </div>
            <div>
              <h5>Bio Medical Engineering</h5>
              <h5>Siriraj piyamahakarun Hospital</h5>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div
              style={{
                borderRight: "2px dashed white",
                paddingRight: "30px",
                marginRight: "20px",
              }}
            >
              <h5>
                NOV
                <br />
                2018
                <br />-<br />
                FEB
                <br />
                2020{" "}
              </h5>
            </div>
            <div>
              <h5>SERVICE ENGINEER</h5>
              <h5>Hi - Res Imaging Co. ,Ltd</h5>
              <h6>
                - Repair Medical equipment CR,DR
                <br />
                - System Pacs Administration
                <br />- Repair Ultrasound Machine
              </h6>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div
              style={{
                borderRight: "2px dashed white",
                paddingRight: "30px",
                marginRight: "20px",
              }}
            >
              <h5>
                APR
                <br />
                2017
                <br />-<br />
                AUG
                <br />
                2017{" "}
              </h5>
            </div>
            <div>
              <h5>AIRPORT MAINTENANCE TECHNICIAN</h5>
              <h5>THAI AIRWAYS INTERNATIONAL PUBLIC COMPANY LIMITED </h5>
              <h6>
                - Repair Electronic Tools
                <br />
                - Aircraft inspection and maintenance
                <br />- Aviation Maintenance Equipment
              </h6>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "44px",
          }}
        >
          <h4>{"</EXPERIENCE>"}</h4>
        </div>
      </div>
    </div>
  );
}
