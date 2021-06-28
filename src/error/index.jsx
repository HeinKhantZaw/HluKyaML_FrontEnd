import React from "react";
import "./error.css";
import { Fab } from "ui-neumorphism";
const Error = () => {
  return (
    <>
      <div className='text text-center error-title'>ERROR 404</div>
      <br />
      <div className='text text-center error-text'>Page Not Found</div>
      <br />
      <div className='row'>
        <Fab
          className='col d-inline-flex justify-content-center'
          onClick={function () {
            window.open(`${process.env.PUBLIC_URL}/`,"_self");
          }}>
          &nbsp;
          <span style={{ fontSize: "30px", color: "#46484b" }}>&#127968;</span>
          &nbsp;Back To Home&nbsp;
        </Fab>
      </div>
    </>
  );
};

export default Error;
