import react, {useState} from 'react';

const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;
  
    if (value > 2500) {
      return (
        <svg x={cx - 40} y={cy - 40} height="80" width="80">
            <circle cx="40" cy="40" r="13" stroke="rgba(249,99,50,0.2)" stroke-width="26" fill="rgba(249,99,50,1)" />  
        </svg>
      );
    }
};

export default CustomizedDot;