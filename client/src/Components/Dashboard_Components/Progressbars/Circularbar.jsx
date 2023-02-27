import React from "react";

function Circularbar({
  strokeWidth = 10,
  sqSize = 200,
  percentage = 0,
  fontSize = 32,
  color = "red",
}) {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox} className="p-3">
      <circle
        className="fill-transparent stroke-gray-300"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        className="fill-transparent"
        stroke={color}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        fill={color}
        fontSize={fontSize}
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
}

export default Circularbar;

// class CircularProgressBar extends React.Component {
//   render() {
//     // Size of the enclosing square
//     const sqSize = sqSize;
//     // SVG centers the stroke width on the radius, subtract out so circle fits in square
//     const radius = (sqSize - strokeWidth) / 2;
//     // Enclose cicle in a circumscribing square
//     const viewBox = `0 0 ${sqSize} ${sqSize}`;
//     // Arc length at 100% coverage is the circle circumference
//     const dashArray = radius * Math.PI * 2;
//     // Scale 100% coverage overlay with the actual percent
//     const dashOffset = dashArray - (dashArray * percentage) / 100;

//     return (
//       <svg
//         width={sqSize}
//         height={sqSize}
//         viewBox={viewBox}
//       >
//         <circle
//           className="circle-background"
//           cx={sqSize / 2}
//           cy={sqSize / 2}
//           r={radius}
//           strokeWidth={`${strokeWidth}px`}
//         />
//         <circle
//           className="circle-progress"
//           cx={sqSize / 2}
//           cy={sqSize / 2}
//           r={radius}
//           strokeWidth={`${strokeWidth}px`}
//           // Start progress marker at 12 O'Clock
//           transform={`rotate(-90 ${sqSize / 2} ${
//             sqSize / 2
//           })`}
//           style={{
//             strokeDasharray: dashArray,
//             strokeDashoffset: dashOffset,
//           }}
//         />
//         <text
//           className="circle-text"
//           x="50%"
//           y="50%"
//           dy=".3em"
//           textAnchor="middle"
//         >
//           {`${percentage}%`}
//         </text>
//       </svg>
//     );
//   }
// }

// CircularProgressBar.defaultProps = {
//   sqSize: 100,
//   percentage: 25,
//   strokeWidth: 5,
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       percentage: 25,
//     };

//     this.handleChangeEvent = this.handleChangeEvent.bind(this);
//   }

//   handleChangeEvent(event) {
//     this.setState({
//       percentage: event.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <CircularProgressBar
//           strokeWidth="10"
//           sqSize="200"
//           percentage={this.state.percentage}
//         />
//         <div>
//           <input
//             id="progressInput"
//             type="range"
//             min="0"
//             max="100"
//             step="1"
//             value={this.state.percentage}
//             onChange={this.handleChangeEvent}
//           />
//         </div>
//       </div>
//     );
//   }
// }
