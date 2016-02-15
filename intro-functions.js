var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if (a > b){ return a;}
    else { return b; }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    if ((a > b) && (a >c)) {return a;}
    else if ((b > a) && (b > c)) {return b;}
    else {return c;}
 }

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    char = char.toString().toUpperCase();
    if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
      return true;
    }
    else {return false;}
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){ //e.g. bailey --> bobailolyoy
    var returnString = ""; //1. Create empty string so that 'text' has somewhere to go
    if (typeof(text) !== 'string'){
      return text.toString(); // 2. If not a string, can't go through
    }
    for (var i = 0; i < text.length; i++) { // 3. Create 'for loop': starts at first letter, ends on last letter (1.'b' 2.'a' etc.)
      if (isVowel(text[i]))
      {returnString = returnString + text[i];} //4(a) If a vowel, add to returnString

      else {
        returnString = returnString + text[i] + "o" + text[i]; //4(b) If a consanant, add letter, add o and add letter again
      }
}
return returnString; //5. Return the value
}
console.assert(rovarspraket("a") === "a");
console.assert(rovarspraket("b") === "bob");
console.assert(rovarspraket("cat") === "cocatot");
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot");
console.assert(rovarspraket(0) === "0");

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str) { //creating function, "str" is parameter (going to use "bailey")
var newString = ""; //creating an empty variable
for (var i = str.length - 1; i >= 0; i--) { //starting off at end of "str" but need to move back 1 (O-index), stops at 0, and increments down by one
newString += str[i]; //newString (which is empty) = newString + y, then newString = y + e, etc.
}
return newString; //returns it
}

console.assert(reverse("books") === "skoob");
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew");

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence) { //E.g. "This is awesome"
    var input = sentence.replace("'", "").split(" "); // 1. Split 'sentence' so that each word is separate and put into an array
    var longWord = "";  //2. Create an empty variable. length = 0 initially;
    for (var i = 0; i < input.length; i++) {  // 3. Create 'for loop': starts at first word ("This"), stops at last ("awesome")
      if (input[i].length > longWord.length) { // 4. If "this" is greater than longWord, put it in long word. If "is" greater than longWord (which is now "this") put it in longWord (which you don't because it's shorter)
      longWord = input[i];//puts input[i] in longWord if condition is met
      }
    }
    return longWord;
}

console.assert(findLongestWord("book dogs") === "book");
console.assert(findLongestWord("don't mess with Texas") === "Texas");
