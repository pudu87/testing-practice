import range from 'lodash/range'

function caesarCipher(string, value) {
  return string.split('').map(char => {
    return String.fromCharCode(shift(char.charCodeAt(), value));
  }).join('');
}

function shift(code, value) {
  value = value < 0 ? (value % 26) + 26 : value % 26;
  if (range(65, 90).includes(code)) {
    return ((code - 65 + value) % 26) + 65;
  } else if (range(97, 122).includes(code)){
    return ((code - 97 + value) % 26) + 97;
  } else {
    return code;
  }
}

export { caesarCipher }
