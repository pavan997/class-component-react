import React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      clickCount: 0
    };
  }
  handleClick = (value) => {
    this.setState(
      {
        counter: this.state.counter + value,
        clickCount: this.state.clickCount + 1
      },
      () => console.log(this.state)
    );
    console.log(this.state);
    // this.setState((prev) => {
    //   return {
    //     counter: prev.counter + value
    //   };
    // });
  };

  render() {
    console.log(this);
    const { props } = this.props;
    const { counter, clickCount } = this.state;

    return (
      <div>
        <h1>{props}</h1>
        <h2>{counter}</h2>
        <button onClick={() => this.handleClick(1)}>ADD</button>
        <button onClick={() => this.handleClick(-1)}>REDUCE</button>
        <div>{`number of clicks ${clickCount}`}</div>
      </div>
    );
  }
}
export { Component };
