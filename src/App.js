import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    total: 0
  };

  constructor() {
    super();
    console.log("App- Constructor");
  }

  componentDidMount() {
    // place to get ajax calls
    // do ajax call
    //this.setState();
    console.log("App- Mounted");
  }

  updateTotal = () => {
    var total = { ...this.state.total };
    const counters = [...this.state.counters];
    for (var i = 0; i < counters.length; i++) {
      total += counters[i].value;
    }
    this.setState({ total });
  };

  handleIncrement = counter => {
    console.log(counter);
    // clone of the above array
    //shouldnt update directly, need to pass clone
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(ele => {
      ele.value = 0;
      return ele;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("event handler called", counterId);
    const counters = this.state.counters.filter(ele => ele.id != counterId);
    this.setState({ counters });
  };
  render() {
    console.log("App- render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(ele => ele.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
