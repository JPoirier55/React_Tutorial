import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  //   tags2: [
  //     { name: "tag1+", id: "1" },
  //     { name: "tag2+", id: "2" },
  //     { name: "tag3+", id: "3" }
  //   ],
  //   tags2: []
  // };
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call to get new data from server
    }
  }

  componentWillMount() {
    console.log("Counter unmount");
  }

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   // console.log("Incret click", this);
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () =>{
  //   this.handleIncrement({id : 1})
  // }

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
    console.log("Counter- rendered");
    return (
      <div>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags2.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
