const toyBox = {
    bigBox: {
      toy: "Ball",
        smallBox: {
          toy: "Doll",
            tinyBox: {
                toy: "Toy Car"
            }
        }
    }
}

console.log(toyBox.bigBox.smallBox.tinyBox.toy)
