console.log("Script started");

function makeBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
  }
  
  function applyStyle() {
    var textArea = document.getElementById("textArea");
    var fancyRadio = document.querySelector('input[value="FancyShmancy"]');
    var boringRadio = document.querySelector('input[value="BoringBetty"]');
  
    if (fancyRadio.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "inherit";
      textArea.style.textDecoration = "none";
    }
  }
  
  function moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
      }
      sentences[i] = words.join(" ");
    }
    
    textArea.value = sentences.join(". ");
  }