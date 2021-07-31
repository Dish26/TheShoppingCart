import React from 'react';
import './Backdrop.css';

//destructuing show prop
const Backdrop = ({show, click}) => {
    //we'll only return if show if true
    return  show &&  <div className="backdrop" onClick={click}> </div>
    
};

export default Backdrop
