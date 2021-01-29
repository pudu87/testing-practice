function analyse(array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length
  }
}

function average(array) {
  return array.reduce((sum, item) => {
    return item + sum;
  }) / array.length;
}

function min(array) {
  return array.sort((a, b) => {
    return a - b;
  })[0];
}

function max(array) {
  return array.sort((a, b) => {
    return b - a;
  })[0];
}

export { analyse }
