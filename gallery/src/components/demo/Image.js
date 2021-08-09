import React, { useEffect, useState } from "react";

export const Image = () => {
  const [state, setstate] = useState(null);

  /*  ------- wont work like this bcoz we r return mounting n unmouting in same method -------*/
  //   useEffect(() => {
  //     console.log("Image Useeffect");
  //     setstate(
  //       setInterval(() => {
  //         console.log("hello");
  //       }, 1000)
  //     );
  useEffect(() => {
    console.log("Image Useeffect");
    let interval = setInterval(() => {
      console.log("hello");
    }, 1000);

    return () => {
      console.log("Images unMount");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {console.log("Image Render")}
      <img
        style={{
          width: "40%",
          height: "10%",
          marginTop: "20px",
          marginLeft: "40%",
        }}
        src="https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
      />
    </div>
  );
};

// import React, { Component } from "react";

// export default class image extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { intervals: null };
//     console.log("Image constructor");
//   }
//   componentDidMount() {
//     console.log("Image ComponentDidMount");
//     this.setState({
//       intervals: setInterval(() => {
//         console.log("hello");
//       }, 1000),
//     });
//   }
//   componentWillUnmount() {
//     console.log("Image Unmount");
//     clearInterval(this.state.intervals);
//   }
//   render() {
//     return (
//       <div>
//         {console.log("Image Render")}
//         <img
//           style={{
//             width: "40%",
//             height: "10%",
//             marginTop: "20px",
//             marginLeft: "40%",
//           }}
//           src="https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
//         />
//       </div>
//     );
//   }
// }
