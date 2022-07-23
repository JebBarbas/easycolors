/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { webCreator } = require('./web.creator')
const { materialCreator } = require('./material.creator')
const { tailwindCreator } = require('./tailwind.creator')

function main(){
    webCreator()
    materialCreator()
    tailwindCreator()
}

main()