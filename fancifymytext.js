function biggerFont(){
    document.getElementById("input").style.fontSize = "24pt";

}
function fancyStyle(){
    document.getElementById("input").style.fontWeight = "bold";
    document.getElementById("input").style.color = "blue";
    document.getElementById("input").style.textDecoration = "underline";

}
function boringStyle(){
    document.getElementById("input").style.fontWeight = "normal";
    document.getElementById("input").style.color = "black";
    document.getElementById("input").style.textDecoration = "none";
}
function moo(){
    var textArea = document.getElementById("input");
    var text = textArea.value;

    textArea.value = text.toUpperCase();

var str = text.split(". ");
  for (var i = 0; i < str.length; i++) {
    var parts = str[i].split(" ");
    var lastWordIndex = parts.length - 1;
    var lastWord = parts[lastWordIndex];

    if (!lastWord.endsWith("-Moo")) {
      parts[lastWordIndex] = lastWord + "-Moo";
    }

    str[i] = parts.join(" ");
  }

  textArea.value = str.join(". ");
}