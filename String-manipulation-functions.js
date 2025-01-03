
// Reverse a String
function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Count Characters

function countCharacters(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}


// Capitalize Words

function capitalizeWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
