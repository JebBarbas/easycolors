# EasyColors

Package that stores colors of the web and many popular css frameworks.

Currently, it stores `Web`, `Bootstrap`, `Tailwind` and `Material` colors.

## Instalation

```
npm i easycolors
```

## Web Colors

This object stores all the web colors, acording to the W3C specs, plus the memorial color `rebeccaPurple`.

There are many forms to access a color, there are some examples:

```js
/* 
 * NOTE:
 * These examples use "import { ... } from 'module'", sintax, if you are using commonjs modules
 * you can change this to "const { ... } = require('module')"
 */

// Form 1 (Recomended): Access the color destructuring the color object 
import { red, crimson } from 'easycolors/web/red'
console.log(red, crimson)

// Form 2: Access the color object the web object (this red object has all the reds)
import { red } from 'easycolors/web'
console.log(red.red, red.crimson, red.darkRed)

// Form 3: Access the color destructuring the all object (this all object has all the colors)
import { all } from 'easycolors/web'
console.log(all.crimson, all.blue, all.black)

// Form 4: Access the color destructuring the web object of the module (not recomended, because this object contains the all object, and all the color objects, and, the paths will become very large)
import { web } from 'easycolors'
console.log(web.all.red, web.blue.skyBlue, web.black.black)
```

### Available Colors

Unfortunately, there are so many web colors, that list them all will result in a very large list, so, I would
only write the color families (or groups), and then, in each family, it has colors inside.

- `black`
- `blue`
- `brown`
- `cyan`
- `green`
- `orange`
- `pink`
- `purple`
- `red`
- `white`
- `yellow`

## Bootstrap

This object stores the colors of the Bootstrap (v5.2) Theme, this only stores the main colors.

There are some examples of forms to access this colors:

```js
/* 
 * NOTE:
 * These examples use "import { ... } from 'module'", sintax, if you are using commonjs modules
 * you can change this to "const { ... } = require('module')"
 */

// Form 1 (recomended): Import the colors destructuring the bootstrap object
import { primary, secondary, success } from 'easycolors/bootstrap'
console.log(primary, secondary, success)

// Form 2: Import the colors destructuring the module
import { bootstrap } from 'easycolors'
console.log(bootstrap.danger, bootstrap.info)
```

### Available Colors

These are the available colors in the `bootstrap` object:

- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `info`
- `light`
- `dark`

## Material (MaterialUI)

This object stores the colors of the Material 2014 Color Palette (currently valid in Material v5.9.0).

These are some examples of forms to access this colors:

```js
/* 
 * NOTE:
 * These examples use "import { ... } from 'module'", sintax, if you are using commonjs modules
 * you can change this to "const { ... } = require('module')"
 */

// Form 1: Using destructuration from the color file, importing only the shades that you need (not recommended because using this you'll lose readability)
// To import a shade directly, you'll need to use the "s" prefix to meet the variable name rules
import { s50, sA100 } = 'easycolors/material/red'
console.log(s50, sA100)

// Form 2 (recomended): Importing the color object and then accessing it using [] or dot-notation (besides is longer that form 1, this form is more readable, so is the recomended form)
import red from 'easycolors/material/red'
console.log(red['500'], red['A400'], red.A700)

// Form 3: Using destructuration of the material object of the colors that you want
import { blue, brown, common } from 'easycolors/material'
console.log(blue[100], brown['200'], common.white, common.black)

// Form 4: Importing all the material colors (not recomended)
import { material } from 'easycolors'
console.log(material.red[500], material.blue[600], material.common.black)
```

### Available Colors

Unfortunately, there are so many material colors, that list them all will result in a very large list, so, I 
would only write the color families (or groups), and then, in each family, it has different shades inside
(see Available Shades).

- `amber`
- `blue`
- `blueGrey`
- `brown`
- `common`: This object only has 2 colors: `white` and `black`
- `cyan`
- `deepOrange`
- `deepPurple`
- `green`
- `grey`
- `indigo`
- `lightBlue`
- `lightGreen`
- `lime`
- `orange`
- `pink`
- `purple`
- `red`
- `teal`
- `yellow`

### Available Shades

One MaterialColorObject has this shades: (from 50-900 a lower number is a brigher color, and in A colors, 
is the same, but the A colors are meant to be accent colors)

- `50`
- `100`
- `200`
- `300`
- `400`
- `500`
- `600`
- `700`
- `800`
- `900`
- `A100`
- `A200`
- `A400`
- `A700`

### Typescript

If you are using Typescript `easycolors/material` exports an interface named `MaterialColorObject`,
this interface contains all the shades of a color of Material.

Note: This type is exported from `easycolors/material`, so, if you try to import it from `easycolors`, this
won't work.

## Tailwind Colors

This object stores the colors of the Tailwind default palette (v3.1.6).

These are some examples of forms to access this colors:

```js
/* 
 * NOTE:
 * These examples use "import { ... } from 'module'", sintax, if you are using commonjs modules
 * you can change this to "const { ... } = require('module')"
 */

// Form 1: Using destructuration from the color file, importing only the shades that you need (not recommended because using this you'll lose readability)
// To import a shade directly, you'll need to use the "s" prefix to meet the variable name rules
import { s50, sA100 } = 'easycolors/tailwind/emerald'
console.log(s50, sA100)

// Form 2 (recomended): Importing the color object and then accessing it using [] or dot-notation (besides is longer that form 1, this form is more readable, so is the recomended form)
import zinc from 'easycolors/tailwind/red'
console.log(zinc['500'], zinc['A400'], zinc.A700)

// Form 3: Using destructuration of the material object of the colors that you want
import { emerald, sky, zinc } from 'easycolors/tailwind'
console.log(emerald[100], sky['200'], zinc[50], zinc['50'])

// Form 4: Importing all the tailwind colors (not recomended)
import { tailwind } from 'easycolors'
console.log(tailwind.red[500], tailwind.blue[600], tailwind.emerald['200'])
```

### Available Colors

Unfortunately, there are so many material colors, that list them all will result in a very large list, so, I 
would only write the color families (or groups), and then, in each family, it has different shades inside
(see Available Shades).

- `amber`
- `blue`
- `cyan`
- `emerald`
- `fuchsia`
- `gray`
- `green`
- `indigo`
- `lime`
- `neutral`
- `orange`
- `pink`
- `purple`
- `red`
- `rose`
- `sky`
- `slate`
- `stone`
- `teal`
- `violet`
- `yellow`
- `zinc`

### Available Shades

One TailwindColorObject has this shades: (from 50-900 a lower number is a brigher color)

- `50`
- `100`
- `200`
- `300`
- `400`
- `500`
- `600`
- `700`
- `800`
- `900`

### Typescript

If you are using Typescript `easycolors/tailwind` exports an interface named `TailwindColorObject`,
this interface contains all the shades of a color of Tailwind.

Note: This type is exported from `easycolors/tailwind`, so, if you try to import it from `easycolors`, this
won't work.
