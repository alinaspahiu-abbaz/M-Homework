/* 1) MAX CHAR
​
Given a string, return the character that is most
commonly used in the string.
​
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
    */

function maxhChar(str, letter) {
    let letter_Count = 0;
    for (let position = 0; position <str.length; position++)
      {
          if (str.charAt(position) == letter)
          {
              letter_Count +=1;
          }
      }
    return letter_Count;

}
maxhChar("I am Alina",);
