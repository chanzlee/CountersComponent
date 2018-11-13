import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counter from "./components/counter";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    //props have to be passed as a argument in order to run below.
    // this.state.counters = this.props.counters;
    console.log("App constructor");
  }

  componentDidMount() {
    //Ajax call
    // this.setState({movies})

    console.log("App mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log(counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = counterId => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
