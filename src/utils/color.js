/**
 * Generate a 6-digits hex value from a string
 * @param {string} str 
 */
export const stringToColour = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
      hash = str.toLowerCase().charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

/**
 * Get a white or black color to contrat with an input color
 * @param {string} hexcolor HEX color
 */
export const getContrast = (hexcolor) => {

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// Convert to RGB value
	const r = parseInt(hexcolor.substr(0,2),16);
	const g = parseInt(hexcolor.substr(2,2),16);
	const b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};