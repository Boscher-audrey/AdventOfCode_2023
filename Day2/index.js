const fs = require("fs");

// Part 1
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const input = data.toString();
  const maxRed = 12;
  const maxGreen = 13;
  const maxBlue = 14;

  const games = input.split("\r\n");
  const gamesResult = games.map((game, index) => {
    const gameSets = game.replace(`Game ${index + 1}: `, "").split(";");
    let red = 0,
      green = 0,
      blue = 0;

    gameSets.map((set) => {
      const cubeColors = set.split(",");

      cubeColors.map((color) => {
        const number = Number(color.replace(/\D/g, ""));

        if (color.includes("red") && number >= red) {
          red = number;
        } else if (color.includes("green") && number >= green) {
          green = number;
        } else if (color.includes("blue") && number >= blue) {
          blue = number;
        }
      });
    });

    if (red <= maxRed && green <= maxGreen && blue <= maxBlue) {
      return index + 1;
    } else {
      return 0;
    }
  });

  const result = gamesResult.reduce((callback, currentValue) => {
    return parseInt(callback) + parseInt(currentValue);
  });

  console.log("Part 1 : ", result);
});

// Part 2
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const input = data.toString();

  const games = input.split("\r\n");
  const gamesResult = games.map((game, index) => {
    const gameSets = game.replace(`Game ${index + 1}: `, "").split(";");
    let red = 0,
      green = 0,
      blue = 0;

    gameSets.map((set) => {
      const cubeColors = set.split(",");

      cubeColors.map((color) => {
        const number = Number(color.replace(/\D/g, ""));

        if (color.includes("red") && number >= red) {
          red = number;
        } else if (color.includes("green") && number >= green) {
          green = number;
        } else if (color.includes("blue") && number >= blue) {
          blue = number;
        }
      });
    });

    return red * blue * green;
  });

  const result = gamesResult.reduce((callback, currentValue) => {
    return parseInt(callback) + parseInt(currentValue);
  });

  console.log("Part 2 : ", result);
});
