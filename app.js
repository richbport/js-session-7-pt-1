const toyBox = {
  smallBox: { toys: "Car" },
  mediumBox: { toys: "Doll" },
  bigBox: { toys: ["Ball", "Puzzle"] },
};

// const toyBox = [
//   ["Car", "Doll"],
//   ["Ball", "Puzzle"],
//   ["Yo-Yo", ["Action Figure", "Blocks"]],
// ];

// for (let list of toyBox) {
//   for (let toy of list) {
//     if(Array.isArray(toy)) {
//       for (let insideToy of toy) {
//         console.log(insideToy)
//       }
//     } else {
//       console.log(toy)
//     }
//   }
// }

// 1|1 -> ["Car", "Doll"] === list toy === "Car"
// 1|2 -> ["Car", "Doll"] === list toy === "Doll"
// 2|1 -> ["Ball", "Puzzle"] === list toy === "Ball"
// 2|2 -> ["Ball", "Puzzle"] === list toy === "Puzzle"
// 3|1 -> ["Yo-Yo", ["Action Figure", "Blocks"]] === list toy === "Yo-Yo"
// 3|2 -> ["Yo-Yo", ["Action Figure", "Blocks"]] === list toy === ["Action Figure", "Blocks"]
// 3|2|1 -> ["Action Figure", "Blocks"] === toy insideToy === "Action Figure"
// 3|2|2 -> ["Action Figure", "Blocks"] === toy insideToy === "Blocks"
//

// const toyBox = [
//   ["Car", "Doll"],
//   ["Ball", "Puzzle"],
// ];

// for (let list of toyBox) {
//   for (let toy of list) {
//     console.log(toy)
//   }
// }

// CAR DOLL BALL PUZZLE
