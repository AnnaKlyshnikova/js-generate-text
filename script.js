function generateText() {
  var words1 = ["Товарищи,", "С другой стороны", "..."];
  var words2 = ["реализация намеченных плановых заданий", "..."];
  var words3 = ["играет важную роль в формировании", "..."];
  var words4 = ["существенных финансовых ..."];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);
  var rand4 = Math.floor(Math.random() * words4.length);
  var phrase = words1[rand1] + " " + words2[rand2] +
      " " + words3[rand3] + " " + words4[rand4] + "!";
  return phrase;
}

var generateBtn = document.getElementById('generate');
var resultField = document.getElementById('text');

generateBtn.addEventListener('click', function() {
  resultField.textContent = generateText();
});

window.addEventListener('load', generateText);
