function firstNonRepeatedChar(str) {
 // Write your code here
 const charCount = new map();
 // Iterate through the string to count each character's frequency
 for(const char of str)
  {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
   if(charCount.get(charCount.get(char) === 1)
      {
    return char;
   }
  }

 return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
