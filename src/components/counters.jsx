import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDelete, onReset, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          // passing children props.
          // <Counter key={counter.id} value={counter.value}>
          //   <h4>Counter #{counter.id}</h4>
          // </Counter>
          <Counter
            onIncrement={onIncrement}
            onDelete={onDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
