const SYMBOLS = ["", "k", "M"];

/**
 * Abbreviate a number by tier (thousands, millions)
 * @param {number} number input number (e.g. 127348)
 * @returns {number} the abbreviated number (e.g. 127k) 
 */
export const abbreviateNumber = number => {
    var tier = Math.log10(number) / 3 | 0;
    if (tier === 0) {
      return number;
    }

    var suffix = SYMBOLS[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    return scaled.toFixed(0) + suffix;
}