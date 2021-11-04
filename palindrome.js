function palindrome(str) {
    let polishedString =str.replace(/\W+|_/g, "").toLowerCase();
    let reversedString = polishedString.split("").reverse().join("");
    console.log(polishedString)
    if (polishedString != reversedString){
      return false;
    }
    return true;
  }
  
  
  let result = palindrome("_eye")
  console.log(result);