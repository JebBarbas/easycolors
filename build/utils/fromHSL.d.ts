/** Converts the components of an HSL color to a hexadecimal string
 * Instructions from: https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 * @param hue Hue in degrees from 0 to 360 (exclusive)
 * @param saturation Percentage of saturation from 0 to 100 (inclusive)
 * @param lightness Percentage of lightness from 0 to 100 (inclusive)
*/
export default function fromHSL(hue: number, saturation: number, lightness: number): string;
