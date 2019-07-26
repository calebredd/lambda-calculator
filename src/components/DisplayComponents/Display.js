import React from "react";

export default class Display extends React.Component {
  render() {
    return (
      <div className="display">
        {/* Display any props data here */}
        {this.props.number}
      </div>
    );
  }
}
