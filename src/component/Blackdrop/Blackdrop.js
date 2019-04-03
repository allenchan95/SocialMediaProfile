import React from "react";
import  "./Blackdrop.css";



const blackdrop = props => {
  return (
    <div >
          <div className='blackdrop'>
           {props.children }
          </div>
 
         
    </div>
  );
};

export default blackdrop;

