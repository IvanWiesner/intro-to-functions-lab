function shout(string) {
    return string.toUpperCase();
  } 
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
    const firstOne = "I can't hear you!";
    const secondOne = "YES INDEED!";
    const thirdOne = "I love you, too.";
    if (string.toLowerCase(string) === string) {
        return firstOne;
    }
    else if (string.toUpperCase(string) === string) {
        return secondOne;
    }
    else if ("I love you, Grandma." === string) {
        return thirdOne
    }
}