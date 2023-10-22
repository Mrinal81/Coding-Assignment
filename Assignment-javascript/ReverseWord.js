const Sentence = "This is a sunny day";

const reversedSentence = reverseWord(Sentence);
console.log(reversedSentence);

function reverseWord(sentence) {
    let reverseWords = [];
    let word = '';


    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word = sentence[i] + word;
        }
        else {
            reverseWords.push(word);
            word = '';
        }
    }
    reverseWords.push(word);
    let reversedSentence = reverseWords.join(' ');
    return reversedSentence;
}

