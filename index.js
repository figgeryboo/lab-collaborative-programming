const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(sentence) {
  return sentence.sort((a, b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {   
  let result = [];
  for (let i = 0; i < word.length; i++) {
      word = word.substring(1) + word[0];
      result.push(word);
  }
  return result;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {	
  for (const num of numbers){
    if (typeof num !== "number"){
      return numbers
    }
  }
  return Math.max(...numbers) - Math.min(...numbers)
}

/**
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) { 
const translatedMessage = []
for (let i = 0; i < message.length; i++){
  const letters = message[i].toUpperCase()
  const morseCode = dictionary[letters]
if (morseCode === undefined){
  continue
}
translatedMessage.push(morseCode)
}
return translatedMessage.join(" ")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
