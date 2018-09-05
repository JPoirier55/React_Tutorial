import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    tags2: [
      { name: "tag1+", id: "1" },
      { name: "tag2+", id: "2" },
      { name: "tag3+", id: "3" }
    ],
    tags2: []
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    // console.log("Incret click", this);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags2.length === 0) return <p>there are no tags</p>;

    return (
      <ul>
        {this.state.tags2.map(tag => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags2.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
