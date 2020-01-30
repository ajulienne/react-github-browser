const SYMBOLS = ["", "k", "M"];

/**
 * Abbreviate a number by tier (thousands, millions)
 * @param {number} number input number (e.g. 127348)
 * @returns {string} the abbreviated number (e.g. 127k) 
 */
export const abbreviateNumber = number => {
    var tier = Math.log10(number) / 3 | 0;
    if (tier === 0) {
      return number.toFixed(0).toString();
    }

    var suffix = SYMBOLS[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    return scaled.toFixed(0) + suffix;
}

/**
 * Decode a base64 string in unicode 
 * @param {string} str base64 value
 */
export const b64DecodeUnicode = str => {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}