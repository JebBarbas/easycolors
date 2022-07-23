"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fromRGB_1 = __importDefault(require("./fromRGB"));
/** Converts a value in the range from 0 to max in a number from 0 to 255 (inclusive) */
function to255(value, max) {
    return Math.min(Math.round((value * 255) / max), 255);
}
function makeTest(tempColor, temp, temp2) {
    const tempi = temp - temp2;
    if (6 * tempColor < 1)
        return temp2 + tempi * 6 * tempColor;
    else if (2 * tempColor < 1)
        return temp;
    else if (3 * tempColor < 2)
        return temp2 + tempi * ((2 / 3) - tempColor) * 6;
    return temp2;
}
/** Adds 1 to temporal if temporal is negative, and substracts 1 if it passes 1  */
function fixTemporal(temporal) {
    temporal = temporal < 0 ? temporal + 1 : temporal;
    return temporal > 1 ? temporal - 1 : temporal;
}
/**
 * @param hue Number between 0 and 1
 */
function getColors(hue, temp, temp2) {
    const temporalRed = fixTemporal(hue + 1 / 3);
    const temporalGreen = fixTemporal(hue);
    const temporalBlue = fixTemporal(hue - 1 / 3);
    return {
        red: to255(makeTest(temporalRed, temp, temp2), 1),
        green: to255(makeTest(temporalGreen, temp, temp2), 1),
        blue: to255(makeTest(temporalBlue, temp, temp2), 1)
    };
}
/** Converts the components of an HSL color to a hexadecimal string
 * Instructions from: https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 * @param hue Hue in degrees from 0 to 360 (exclusive)
 * @param saturation Percentage of saturation from 0 to 100 (inclusive)
 * @param lightness Percentage of lightness from 0 to 100 (inclusive)
*/
function fromHSL(hue, saturation, lightness) {
    hue /= 360;
    lightness /= 100;
    saturation /= 100;
    if (saturation === 0) {
        const rgbComp = to255(lightness, 100);
        return (0, fromRGB_1.default)(rgbComp, rgbComp, rgbComp);
    }
    const temp = lightness < 0.5 ?
        lightness * (1 + saturation) :
        lightness + saturation - lightness * saturation;
    const temp2 = 2 * lightness - temp;
    const { red, green, blue } = getColors(hue, temp, temp2);
    return (0, fromRGB_1.default)(red, green, blue);
}
exports.default = fromHSL;
