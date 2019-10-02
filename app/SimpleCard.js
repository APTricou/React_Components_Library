import React from "react";
import Descrition from "./Description.js";
import Image from "./Image.js";
import Title from "./Title.js";

class SimpleCard extends React.Component {
  constructor(props) {
    //prop structure item={title,desc,imageUrl}
    super(props);
    this.state = {
      title: props.item.title,
      desc: props.item.desc,
      imageUrl: props.item.imageUrl
    };
  }
  render() {
    return (
      <div className="flex-container">
        <Image url={this.state.imageUrl} size="card" />
        <div className="container">
          <Title title={this.state.title} />
          <Descrition desc={this.state.desc} />
        </div>
      </div>
    );
  }
}

export default SimpleCard;

//typical CSS

// .flex-container {
//     display:flex;

// }

// .container {

// }
