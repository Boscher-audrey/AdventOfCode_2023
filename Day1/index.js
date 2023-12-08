const fs = require("fs");

// Part 1
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const input = data.toString();
  const calibrationValues = input.split("\r\n");

  const calibrationValuesReordered = calibrationValues.map((line) => {
    const digits = [...line].filter((char) => {
      if (!isNaN(char)) return char;
    });

    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];

    return firstDigit + lastDigit;
  });

  const calibration = calibrationValuesReordered.reduce(
    (callback, currentValue) => {
      return parseInt(callback) + parseInt(currentValue);
    }
  );

  console.log("Part 1 : ", calibration);
});

// Part 2
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const input = data.toString();
  const calibrationValues = input.split("\r\n");

  const numberInLetter = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const calibrationValuesReordered = calibrationValues.map((line) => {
    var string = "";

    var firstDigit = "";

    for (i = 0; i < line.length; i++) {
      const currentChar = line[i];

      const result = numberInLetter.filter((number) => {
        if (string.includes(number)) return number;
      });

      if (result.length < 1) {
        string += currentChar;
      } else {
        firstDigit += numberInLetter.indexOf(result[result.length - 1]) + 1;
        break;
      }

      if (result.length < 1 && !isNaN(currentChar)) {
        firstDigit += currentChar;
        break;
      }
    }

    var lastDigit = "";

    for (i = 0; i < line.length; i++) {
      const currentChar = line[i];

      string += currentChar;

      const result = numberInLetter.filter((number) => {
        if (string.includes(number)) return number;
      });

      if (result.length > 0) {
        lastDigit = numberInLetter.indexOf(result[result.length - 1]) + 1;
        string = "" + currentChar;
      }
      if (!isNaN(currentChar)) {
        lastDigit = currentChar;
      }
    }

    return firstDigit + lastDigit;
  });

  const calibration = calibrationValuesReordered.reduce(
    (callback, currentValue) => {
      return parseInt(callback) + parseInt(currentValue);
    }
  );

  console.log("Part 2 : ", calibration);
});
