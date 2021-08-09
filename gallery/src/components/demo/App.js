/* ---------- Functional Component ---------------- */

import React, { useState, useEffect, useRef } from "react";
import { Image } from "./Image";

const App = () => {
  const [isShow, setIsShow] = useState(false);
  // const [didMount, setdidMount] = useState(false);

  //   useEffect(() => {
  //     console.log("App Useeffect");
  //   }, []);

  // we can use two useeffect for only update as well but this will also run once when we first mount component so for that
  // we can avoid the useEffect to run at mounted but this is not good practise
  //   useEffect(() => {
  //     if (isShow) {
  //       console.log("App Useeffect");
  //     }
  //   }, []);

  /* ------ we have another hack  -------- */

  //   useEffect(() => {
  //     console.log("App Useeffect");
  //     setdidMount(true);
  //   }, []);

  //   useEffect(() => {
  //     if (didMount) {
  //       console.log("App second Useeffect");
  //     }
  //   }, [isShow]);

  /* ------ using ref  -------------*/

  // first the ref is false so first effect run and second effect will not work boz its false and then make it true
  // but its not state so wont re render then when btn click and state change then the ref is true and second effect run
  let ref = useRef(false);
  useEffect(() => {
    console.log("App Useeffect");
  }, []);

  useEffect(() => {
    if (ref.current) {
      console.log("App updated Useeffect");
    } else {
      ref.current = true;
    }
  }, [isShow]);

  let handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      {console.log("App render")}
      <button
        style={{
          marginLeft: "60%",
          border: "1px solid black",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
        onClick={handleClick}
      >
        Toggle
      </button>
      {isShow ? <Image /> : null}
    </div>
  );
};

export default App;

/* ------------- Class Component --------------- */

// import React, { Component } from "react";
// import Image from "../components/Image";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShow: false };
//     console.log("App Constructor");
//     this.handleClick = this.handleClick.bind(this);
//   }
//   componentDidMount() {
//     console.log("App Component did mount");
//   }
//   componentDidUpdate() {
//     console.log("App component did update");
//   }
//   handleClick() {
//     this.setState({ isShow: !this.state.isShow });
//   }
//   render() {
//     return (
//       <>
//         {console.log("App render")}
//         <button
//           style={{
//             marginLeft: "60%",
//             border: "1px solid black",
//             padding: "10px",
//             borderRadius: "10px",
//             marginTop: "10px",
//           }}
//           onClick={this.handleClick}
//         >
//           Toggle
//         </button>
//         {this.state.isShow ? (
//           <div>
//             <Image />
//           </div>
//         ) : null}
//       </>
//     );
//   }
// }
