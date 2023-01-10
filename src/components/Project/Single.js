// import { nanoid } from "nanoid";
// import React from "react";

// class Single extends React.Component {
//   constructor(props) {
//     super(props);
//     this.showOrHide = React.createRef();
//   }

//   showDetails = () => {
//     this.showOrHide.current.style.opacity = 1;
//   };

//   hideDetails = () => {
//     this.showOrHide.current.style.opacity = 0;
//   };

//   render() {
//     return (
//       <div>
//         {this.showOrHide && (
//           <div
//             onMouseEnter={() => this.showDetails()}
//             onMouseLeave={() => this.hideDetails()}
//           >
//             <h2 className="text-7xl mt-44">Affichage!</h2>
//             <div className="opacity-0 duration-200 mt-4" ref={this.showOrHide}>
//               <h2 className="text-center">Front-End, Projet</h2>
//               <div className="flex flex-row gap-4 justify-center items-center mt-2">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//                   className="h-10"
//                 />
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
//                   className="h-10 rounded-full"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Single;
