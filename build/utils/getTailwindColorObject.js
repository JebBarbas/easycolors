"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fromHSL_1 = __importDefault(require("./fromHSL"));
const getHSLComponents_1 = __importDefault(require("./getHSLComponents"));
function __getShade(hue, saturation, lightness) {
    return (0, fromHSL_1.default)(hue, saturation, 100 - lightness / 10);
}
function getTailwindColorObject(color) {
    const { hue, saturation } = (0, getHSLComponents_1.default)(color);
    return {
        "50": __getShade(hue, saturation, 50),
        "100": __getShade(hue, saturation, 100),
        "200": __getShade(hue, saturation, 200),
        "300": __getShade(hue, saturation, 300),
        "400": __getShade(hue, saturation, 400),
        "500": __getShade(hue, saturation, 500),
        "600": __getShade(hue, saturation, 600),
        "700": __getShade(hue, saturation, 700),
        "800": __getShade(hue, saturation, 800),
        "900": __getShade(hue, saturation, 900)
    };
}
exports.default = getTailwindColorObject;
