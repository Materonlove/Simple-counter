import React from "react";
const SecondsCounter = (props) => {
    return (
      <>
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5  " id="fondo">
          <div className="row">
            
          <div className="col-2 text-center">
              <h1>
                <span className="badge bg-warning"><i className="fa fa-clock"></i></span>
              </h1>
            </div>
            <div className="col-2 text-center">
              <h1>
                <span className="badge bg-warning">{props.milSeconds}</span>
              </h1>
            </div>
            <div className="col-2 text-center">
              <h1>
                <span className="badge bg-warning">{props.dosSeconds}</span>
              </h1>
            </div>
            <div className="col-2 text-center">
              <h1>
                <span className="badge bg-warning">{props.tresSeconds}</span>
              </h1>
            </div>
            <div className="col-2 text-center">
              <h1>
                <span className="badge bg-warning">{props.centenaSeconds}</span>
              </h1>
            </div>
            <div className="col-1 text-center">
              <h1>
                <span className="badge bg-warning">{props.decenaSeconds}</span>
              </h1>
            </div>
            <div className="col-1 text-center">
              <h1>
                <span className="badge bg-warning">{props.seconds}</span>
              </h1>
            </div>
            




          </div>
        </div>
      </>
    );
  };
  export default SecondsCounter;