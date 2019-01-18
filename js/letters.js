var sample_text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

var counter = {
  "a" : 0,  "b" : 0,  "c" : 0,  "d" : 0,
  "e" : 0,  "f" : 0,  "g" : 0,  "h" : 0,
  "i" : 0,  "j" : 0,  "k" : 0,  "l" : 0,
  "m" : 0,  "n" : 0,  "o" : 0,  "p" : 0,
  "q" : 0,  "r" : 0,  "s" : 0,  "t" : 0,
  "u" : 0,  "v" : 0,  "w" : 0,  "x" : 0,
  "y" : 0,  "z" : 0
}

function countLetters(counter, sample_text){
  
  let textToLower = sample_text.toLowerCase();
  if(sample_text.length === 0){
    return;
  }

  //debugger;
  let character = textToLower.charAt(textToLower.slice(1));
  
  switch (character){
    case "a": counter["a"]++;
              break;
    case "b": counter["b"]++;
              break;
    case "c": counter["c"]++;
              break;
    case "d": counter["d"]++;
              break;
    case "e": counter["e"]++;
              break;
    case "f": counter["f"]++;
              break;
    case "g": counter["g"]++;
              break;
    case "h": counter["h"]++;
              break;
    case "i": counter["i"]++;
              break;
    case "j": counter["j"]++;
              break;
    case "k": counter["k"]++;
              break;
    case "l": counter["l"]++;
              break;
    case "m": counter["m"]++;
              break;
    case "n": counter["n"]++;
              break;
    case "o": counter["o"]++;
              break;
    case "p": counter["p"]++;
              break;
    case "q": counter["q"]++;
              break;
    case "r": counter["r"]++;
              break;
    case "s": counter["s"]++;
              break;
    case "t": counter["t"]++;
              break;
    case "u": counter["u"]++;
              break;
    case "v": counter["v"]++;
              break;
    case "w": counter["w"]++;
              break;
    case "x": counter["x"]++;
              break;
    case "y": counter["y"]++;
              break;         
    case "z": counter["z"]++;
              break;
  }
  countLetters(counter, textToLower.slice(1));
}

$(document).ready(function(){
  countLetters(counter, sample_text);
  $("#result").html(JSON.stringify(counter));
});
