import getYIQ from "./getYIQ";

/**
 * Returns the best color to the text of a given color background
 * @param color The color
 * @param darkColorText If the color is light, then this color will be returned, please write a dark color (default: #000000)
 * @param lightColorText If the color is dark, then this color will be returned, please write a light color (default: #ffffff)
 * @returns Best contrast color text
 */
export default function contrastColor(color:string, options:{darkColorText?:string, lightColorText?:string}){
    const { darkColorText, lightColorText } = options
    return getYIQ(color) >= 128 ? darkColorText ?? '#000000' : lightColorText ?? '#ffffff'
}