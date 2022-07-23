/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

// eslint-disable-next-line no-undef
const { writeFile } = require('node:fs/promises')
// eslint-disable-next-line no-undef
const { makeCamelFromPascal, capitalizeOne, fileHeader } = require('./utils')

class WebColorFamily {
    /**
     * Creates a new Color Family
     * @param {string} name 
     * @param {string} text 
     */
    constructor(name, text){
        this.name = name
        this.colorNames = []
        this.hexValues = []
        
        text.split(/\n/g).filter(line => line !== '').forEach(line => {
            const components = line.split(/\s/g).filter(component => component !== '')
            const [name, redHex, greenHex, blueHex, redDec, greenDec, blueDec] = components

            this.colorNames.push(makeCamelFromPascal(name))
            this.hexValues.push((`#${redHex}${greenHex}${blueHex}`).toLowerCase())
        })
    }

    get variables(){
        if(this.colorNames.length !== this.hexValues.length){
            throw new Error(`I can't, color names and hex values are not the same`)
        }

        let variablesText = ''

        for(let index = 0; index < this.colorNames.length; index++){
            const colorName = this.colorNames[index]
            const value = this.hexValues[index]

            variablesText += `export const ${colorName} = '${value}'\n`
        }

        return variablesText
    }

    get fileText(){
        return `${fileHeader(`Web ${capitalizeOne(this.name)} Colors`, 'web.creator.js')}
${this.variables}`
    }

    async createFile(){
        const filePath = `./src/web/${this.name}.ts`
        await writeFile(filePath, this.fileText)
        console.log(`web.creator: ${this.name}.ts created successfully`)
    }
}

/**
 * Creates a ColorFamily instance
 * @param {string} name 
 * @param {string} text 
 * @returns ColorFamily
 */
const colorFamily = (name, text) => new WebColorFamily(name, text)

const colorFamilies = [
    colorFamily('pink', `
MediumVioletRed	C7 15 85	199  21 133
DeepPink	FF 14 93	255  20 147
PaleVioletRed	DB 70 93	219 112 147
HotPink	FF 69 B4	255 105 180
LightPink	FF B6 C1	255 182 193
Pink	FF C0 CB	255 192 203
`),
    colorFamily('red', `
DarkRed	8B 00 00	139   0   0
Red	FF 00 00	255   0   0
Firebrick	B2 22 22	178  34  34
Crimson	DC 14 3C	220  20  60
IndianRed	CD 5C 5C	205  92  92
LightCoral	F0 80 80	240 128 128
Salmon	FA 80 72	250 128 114
DarkSalmon	E9 96 7A	233 150 122
LightSalmon	FF A0 7A	255 160 122
`),
    colorFamily('orange', `
rangeRed	FF 45 00	255  69   0
Tomato	FF 63 47	255  99  71
DarkOrange	FF 8C 00	255 140   0
Coral	FF 7F 50	255 127  80
Orange	FF A5 00	255 165   0
`),
    colorFamily('yellow', `
DarkKhaki	BD B7 6B	189 183 107
Gold	FF D7 00	255 215   0
Khaki	F0 E6 8C	240 230 140
PeachPuff	FF DA B9	255 218 185
Yellow	FF FF 00	255 255   0
PaleGoldenrod	EE E8 AA	238 232 170
Moccasin	FF E4 B5	255 228 181
PapayaWhip	FF EF D5	255 239 213
LightGoldenrodYellow	FA FA D2	250 250 210
LemonChiffon	FF FA CD	255 250 205
LightYellow	FF FF E0	255 255 224
`),
    colorFamily('brown', `
Maroon	80 00 00	128   0   0
Brown	A5 2A 2A	165  42  42
SaddleBrown	8B 45 13	139  69  19
Sienna	A0 52 2D	160  82  45
Chocolate	D2 69 1E	210 105  30
DarkGoldenrod	B8 86 0B	184 134  11
Peru	CD 85 3F	205 133  63
RosyBrown	BC 8F 8F	188 143 143
Goldenrod	DA A5 20	218 165  32
SandyBrown	F4 A4 60	244 164  96
Tan	D2 B4 8C	210 180 140
Burlywood	DE B8 87	222 184 135
Wheat	F5 DE B3	245 222 179
NavajoWhite	FF DE AD	255 222 173
Bisque	FF E4 C4	255 228 196
BlanchedAlmond	FF EB CD	255 235 205
Cornsilk	FF F8 DC	255 248 220
`),
    colorFamily('purple', `
Indigo	4B 00 82	 75   0 130
Purple	80 00 80	128   0 128
DarkMagenta	8B 00 8B	139   0 139
DarkViolet	94 00 D3	148   0 211
DarkSlateBlue	48 3D 8B	 72  61 139
BlueViolet	8A 2B E2	138  43 226
DarkOrchid	99 32 CC	153  50 204
Fuchsia	FF 00 FF	255   0 255
Magenta	FF 00 FF	255   0 255
SlateBlue	6A 5A CD	106  90 205
MediumSlateBlue	7B 68 EE	123 104 238
MediumOrchid	BA 55 D3	186  85 211
MediumPurple	93 70 DB	147 112 219
Orchid	DA 70 D6	218 112 214
Violet	EE 82 EE	238 130 238
Plum	DD A0 DD	221 160 221
Thistle	D8 BF D8	216 191 216
Lavender	E6 E6 FA	230 230 250
RebeccaPurple   66 33 99    102 51 153
`),
    colorFamily('white',`
MistyRose	FF E4 E1	255 228 225
AntiqueWhite	FA EB D7	250 235 215
Linen	FA F0 E6	250 240 230
Beige	F5 F5 DC	245 245 220
WhiteSmoke	F5 F5 F5	245 245 245
LavenderBlush	FF F0 F5	255 240 245
OldLace	FD F5 E6	253 245 230
AliceBlue	F0 F8 FF	240 248 255
Seashell	FF F5 EE	255 245 238
GhostWhite	F8 F8 FF	248 248 255
Honeydew	F0 FF F0	240 255 240
FloralWhite	FF FA F0	255 250 240
Azure	F0 FF FF	240 255 255
MintCream	F5 FF FA	245 255 250
Snow	FF FA FA	255 250 250
Ivory	FF FF F0	255 255 240
White	FF FF FF	255 255 255
`),
    colorFamily('black', `
Black	00 00 00	  0   0   0
DarkSlateGray	2F 4F 4F	 47  79  79
DimGray	69 69 69	105 105 105
SlateGray	70 80 90	112 128 144
Gray	80 80 80	128 128 128
LightSlateGray	77 88 99	119 136 153
DarkGray	A9 A9 A9	169 169 169
Silver	C0 C0 C0	192 192 192
LightGray	D3 D3 D3	211 211 211
Gainsboro	DC DC DC	220 220 220
`),
    colorFamily('green', `
DarkGreen	00 64 00	  0 100   0
Green	00 80 00	  0 128   0
DarkOliveGreen	55 6B 2F	 85 107  47
ForestGreen	22 8B 22	 34 139  34
SeaGreen	2E 8B 57	 46 139  87
Olive	80 80 00	128 128   0
OliveDrab	6B 8E 23	107 142  35
MediumSeaGreen	3C B3 71	 60 179 113
LimeGreen	32 CD 32	 50 205  50
Lime	00 FF 00	  0 255   0
SpringGreen	00 FF 7F	  0 255 127
MediumSpringGreen	00 FA 9A	  0 250 154
DarkSeaGreen	8F BC 8F	143 188 143
MediumAquamarine	66 CD AA	102 205 170
YellowGreen	9A CD 32	154 205  50
LawnGreen	7C FC 00	124 252   0
Chartreuse	7F FF 00	127 255   0
LightGreen	90 EE 90	144 238 144
GreenYellow	AD FF 2F	173 255  47
PaleGreen	98 FB 98	152 251 152
`),
    colorFamily('cyan', `
Teal	00 80 80	  0 128 128
DarkCyan	00 8B 8B	  0 139 139
LightSeaGreen	20 B2 AA	 32 178 170
CadetBlue	5F 9E A0	 95 158 160
DarkTurquoise	00 CE D1	  0 206 209
MediumTurquoise	48 D1 CC	 72 209 204
Turquoise	40 E0 D0	 64 224 208
Aqua	00 FF FF	  0 255 255
Cyan	00 FF FF	  0 255 255
Aquamarine	7F FF D4	127 255 212
PaleTurquoise	AF EE EE	175 238 238
LightCyan	E0 FF FF	224 255 255
`),
    colorFamily('blue', `
MidnightBlue	19 19 70	 25  25 112
Navy	00 00 80	  0   0 128
DarkBlue	00 00 8B	  0   0 139
MediumBlue	00 00 CD	  0   0 205
Blue	00 00 FF	  0   0 255
RoyalBlue	41 69 E1	 65 105 225
SteelBlue	46 82 B4	 70 130 180
DodgerBlue	1E 90 FF	 30 144 255
DeepSkyBlue	00 BF FF	  0 191 255
CornflowerBlue	64 95 ED	100 149 237
SkyBlue	87 CE EB	135 206 235
LightSkyBlue	87 CE FA	135 206 250
LightSteelBlue	B0 C4 DE	176 196 222
LightBlue	AD D8 E6	173 216 230
PowderBlue	B0 E0 E6	176 224 230
`)
]

function webCreator(){
    colorFamilies.forEach(colorFamily => colorFamily.createFile())
}

// eslint-disable-next-line no-undef
module.exports = {
    webCreator
}