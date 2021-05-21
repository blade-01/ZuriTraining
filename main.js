function convertFahrToCelsius(x) {
  if (isNaN(x)) {
    return `${x} is not a valid number but a/an ${typeof x}`;
  } else {
    return `${x}°F is ${(x - 32 * (5 / 9)).toFixed(4)}°C`;
  }
}

console.log(convertFahrToCelsius(0));

function checkYuGiOh(n) {
  for (let i = 1; i < n; i++) {
    let output = "";
    if (i % 2 == 0) output += "yu";
    if (i % 3 == 0) output += "gi";
    if (i % 5 == 0) output += "oh";
    if (isNaN(n)) output += `Invalid paramater: ${typeof n}`;
    console.log(output || i);
  }
}
checkYuGiOh(10);
