export interface RGBComponents {
    /** Integer number from 0 to 255 (inclusive) that represents the red value in the color */
    red: number

    /** Integer number from 0 to 255 (inclusive) that represents the green value in the color */
    green: number

    /** Integer number from 0 to 255 (inclusive) that represents the blue value in the color */
    blue: number
}

export interface HSLComponents {
    /** Number from 0 to 360 (exclusive) that represents the degrees of hue of the color */
    hue: number

    /** Number from 0 to 100 (inclusive) that represents the percentage of saturation of the color */
    saturation: number

    /** Number from 0 to 100 (inclusive) that represents the percentage of lightness of the color */
    lightness: number
}