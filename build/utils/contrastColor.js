"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getYIQ_1 = __importDefault(require("./getYIQ"));
/**
 * Returns the best color to the text of a given color background
 * @param color The color
 * @param darkColorText If the color is light, then this color will be returned, please write a dark color (default: #000000)
 * @param lightColorText If the color is dark, then this color will be returned, please write a light color (default: #ffffff)
 * @returns Best contrast color text
 */
function contrastColor(color, options) {
    const { darkColorText, lightColorText } = options;
    return (0, getYIQ_1.default)(color) >= 128 ? darkColorText !== null && darkColorText !== void 0 ? darkColorText : '#000000' : lightColorText !== null && lightColorText !== void 0 ? lightColorText : '#ffffff';
}
exports.default = contrastColor;
