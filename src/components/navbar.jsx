import React, { Component } from "react";

//Stateless functional Component by ( sfc )

// const Navbar = (props) => {

//   return (
//     <nav class="navbar navbar-light bg-light">
//       <a class="navbar-brand" href="#">
//         Navbar{" "}
//         <span className="badge badge-pill badge-secondary">
//           {props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// }

class Navbar extends Component {
  render() {
    console.log("Navbar - rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
