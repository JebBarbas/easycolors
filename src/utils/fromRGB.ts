function normalize(number:number){
    if(number < 0) return 0
    if(number > 255) return 255
    return number
}

function toHex(component:number){
    component = normalize(component)
    const letter = component.toString(16)
    return letter.length < 2 ? `0${letter}` : letter
}

/** Converts the components of a RGB color to a hexadecimal string */
export default function fromRGB(red:number, green:number, blue:number):string{
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`
}