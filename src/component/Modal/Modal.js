import React from "react";
import  "./Modal.css";



const modal = props => {
  return (
    <div >
          <div className={props.style}>
           { props.children }
          </div>
            {props.show ? <div className="Backdrop" onClick={props.closed} /> : null
            }
         
    </div>
  );
};

export default modal;

