// importing required packages
const notifier = require('node-notifier');
const file = require('fs');

// now read the file
file.readFile('/Users/pan/documents/vocab/vocab.txt', (err, content) => {
    if (err) throw err;
    let words = content.toString().split(',');

    // now we have to pick random words from the words list
    let locationOfRandomWords = Math.floor(Math.random() * words.length - 1);

    // now split the word and it's desccription
    let combo = words[locationOfRandomWords].split(': ');

    // now notify on the screen
    return notifier.notify({
        title: combo[0],
        message: combo[1],
        timeout: 0,
        sound: true,
        action: ['OK'],
        wait: true,
    });

});

