import type { RGBComponents } from './types'

function __componentToNumber(component:string|undefined){
    if(!component) return 0
    return parseInt(component, 16)
}

/** Converts an hexadecimal color to its red, green and blue components */
export default function getRGBComponents(color:string):RGBComponents{
    const regex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/gi
    const results = regex.exec(color)

    if(!results){
        throw new Error('The given string is not a standard color, use color() to try to fix this.')
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, red, green, blue] = results

    const components:RGBComponents = {
        red: __componentToNumber(red),
        green: __componentToNumber(green),
        blue: __componentToNumber(blue)
    }

    return components
}