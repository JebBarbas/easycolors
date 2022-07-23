"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalize(number) {
    if (number < 0)
        return 0;
    if (number > 255)
        return 255;
    return number;
}
function toHex(component) {
    component = normalize(component);
    const letter = component.toString(16);
    return letter.length < 2 ? `0${letter}` : letter;
}
/** Converts the components of a RGB color to a hexadecimal string */
function fromRGB(red, green, blue) {
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}
exports.default = fromRGB;
