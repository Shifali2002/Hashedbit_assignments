function replaceCorrectWord(sentence, wrong, correct){
    return sentence.replace(wrong,correct);
}

var sentence = prompt("Enter a sentence");
console.log("Entered sentence is: " + sentence);
var wrong = prompt("What is the wrong word in the sentence?");
var correct = prompt("Enter correct word.");
console.log("Corrected sentence is: " + replaceCorrectWord(sentence, wrong, correct));
