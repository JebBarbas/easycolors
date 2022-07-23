/** Gets the YIQ value of the color, in colors with YIQ >= 128 the best text color is black,
 * otherwise, the best text color is white
 * Formula from: https://24ways.org/2010/calculating-color-contrast
 * @param color The color
*/
export default function getYIQ(color: string): number;
