import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: []
  //   // imageUrl: "https://picsum.photos/200"
  // };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  // constructor() {
  //   super();
  //   console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   console.log("inc");
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prev props ", prevProps);
    console.log("prev state ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from the server.
    }
  }

  componentWillUnmount() {
    //component will be unmounted before removed from the dom
    // This gives oppertunity to clean up memory leaks. (unsubscribe)
    console.log("Counter - unmount");
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log("counters rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          {/* {this.props.children} */}
          {/* <img src={this.state.imageUrl} alt="" /> */}
          {/* <span style={{ fontSize: 30 }}>custom style</span> */}

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  // refactor shortcut ctrl+shift+R to extract to method
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
