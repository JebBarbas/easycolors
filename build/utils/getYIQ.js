"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRGBComponents_1 = __importDefault(require("./getRGBComponents"));
/** Gets the YIQ value of the color, in colors with YIQ >= 128 the best text color is black,
 * otherwise, the best text color is white
 * Formula from: https://24ways.org/2010/calculating-color-contrast
 * @param color The color
*/
function getYIQ(color) {
    const { red, green, blue } = (0, getRGBComponents_1.default)(color);
    const yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    return yiq;
}
exports.default = getYIQ;
