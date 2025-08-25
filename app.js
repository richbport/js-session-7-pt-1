const toyBox = [
  ["Car", "Doll"],
  ["Ball", "Puzzle"],
  ["Yo-Yo", ["Action Figure", "Blocks"]],
];

for (let list of toyBox) {
  for (let toy of list) {
    if(Array.isArray(toy)) {
      for (let insideToy of toy) {
        console.log(insideToy)
      }
    } else {
      console.log(toy)
    }
  }
}


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
