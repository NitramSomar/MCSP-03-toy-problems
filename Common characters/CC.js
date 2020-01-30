/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
var commonCharacters = function(string1, string2) {
    // TODO: Your code here!
    //create newStr to store letters that are the same in each str
    let newStr = '';
    //iterate over str1
    let str1 = string1
    let str2 = string2

    
    for (var i = 0; i < str1.length; i++) {
        //iterate over str2
        for (var k = 0; k < str2.length; k++) {
            //if the letters are the same 
          if (str1[i] === str2[k]) {
              //add them to the newstr
              newStr = newStr.concat(str1[i])
              //return the newStr

          }
        } 
    } 
    return newStr;
  };
  console.log(commonCharacters('acexivou', 'aegihobu'));
  