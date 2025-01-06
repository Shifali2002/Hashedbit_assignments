let string1 = "Hello, I am Shifali Kotian. I am an Hashedbit intern.";
var countVowel=0;
var countConst=0;

var vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];


for (i=0; i<string1.length;i++){
    if (vowels.includes(string1[i])) {
        countVowel++;
    }
    else if (string1[i].toLowerCase() >= 'a' && string1[i].toLowerCase() <= 'z'){
        countConst++;
    }
    else{
        continue;
    }
}
console.log("Number of Vowels:" + countVowel);
console.log("Number of Consonants:" + countConst);