import React from "react";

const Image = function(props) {
  return <img src={props.url} alt="image" className={props.size}></img>;
};
export default Image;

//reusable, just push different props for size depending where it is, and adjust in CSS

// typical CSS

// .card {
//     height: 30px;
//     width: 30px;
// }
