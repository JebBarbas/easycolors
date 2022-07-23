"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRGBComponents_1 = __importDefault(require("./getRGBComponents"));
/** Converts a number between 0 and 1 to an integer number between 0 and max */
function convert(number, max) {
    const ratio = number * max;
    return Math.round(ratio);
}
/** Returns the components divided by 255 to return a number between 0 and 1 */
function getPrimeComponents(color) {
    const { red, green, blue } = (0, getRGBComponents_1.default)(color);
    const components = {
        red: red / 255,
        green: green / 255,
        blue: blue / 255
    };
    return components;
}
/** Returns the percentage of saturation of the color, returning a number between 0 and 100 (inclusive)
 * @param colorMax Result of Math.max with prime colors
 * @param colorMin Result of Math.min with prime colors
 * @param lightness Result of get the lightness 0-100 (converted internally)
*/
function getSaturation(colorMax, colorMin, lightness) {
    const internalLightness = lightness / 100;
    if (colorMax === colorMin)
        return 0;
    const maxMin = colorMax - colorMin;
    if (internalLightness <= 0.5) {
        return convert(maxMin / (colorMax + colorMin), 100);
    }
    return convert(maxMin / (2 - maxMin), 100);
}
/** Gets the HUE of the color in an angle between 0 and 360 (exclusive) */
function getHue(redPrime, greenPrime, bluePrime, colorMax, colorMin) {
    const maxMin = colorMax - colorMin;
    let hue = 0;
    if (colorMax === redPrime) {
        hue = (greenPrime - bluePrime) / maxMin;
    }
    else if (colorMax === greenPrime) {
        hue = 2 + (bluePrime - redPrime) / maxMin;
    }
    else {
        hue = 4 + (redPrime - greenPrime) / maxMin;
    }
    hue *= 60;
    // If the hue is negative, add 360 to get a positive number
    return Math.min(Math.round(hue < 0 ? hue + 360 : hue), 359);
}
/** Converts an hexadecimal color to its hue, saturation and lightness components
 * Instructions from: https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
*/
function getHSLComponents(color) {
    const { red, green, blue } = getPrimeComponents(color);
    const colorMax = Math.max(red, green, blue);
    const colorMin = Math.min(red, green, blue);
    const lightness = convert((colorMax + colorMin) / 2, 100);
    const saturation = getSaturation(colorMax, colorMin, lightness);
    const hue = getHue(red, green, blue, colorMax, colorMin);
    const components = { hue, saturation, lightness };
    return components;
}
exports.default = getHSLComponents;
