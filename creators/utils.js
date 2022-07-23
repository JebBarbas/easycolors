//@ts-check

/**
 * Converts a name from PascalCase to camelCase
 * @param {string} pascal Name in PascalCase
 * @returns {string} Name in camelCase
 */
function makeCamelFromPascal(pascal){
    const letters = pascal.split('')
    const first = letters.shift()

    if(!first) return ''

    return `${first.toLowerCase()}${letters.join('')}`
}

/**
 * Returns the same word with the first letter in uppercase
 * @param {string} word 
 * @returns {string} Capitalized word
 */
function capitalizeOne(word){
    const letters = word.split('').map(letter => letter.toLowerCase())
    const first = letters.shift()

    if(!first) return ''

    return `${first.toUpperCase()}${letters.join('')}`
}

/**
 * Returns the headers of a file
 * @param {string} title 
 * @param {string} creatorFileName 
 * @returns {string} Headers
 */
function fileHeader(title, creatorFileName){
    return `/*
* ${title}
* Created by: ${creatorFileName} (written by jebbarbas)
* Last Update: ${new Date().toUTCString()}
*/
`
}

// eslint-disable-next-line no-undef
module.exports = {
    makeCamelFromPascal,
    capitalizeOne,
    fileHeader
}