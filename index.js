var codeExample = process.argv[2];

var CODE_EXAMPLES = [
    'blink',
    'piezo'
];

if (CODE_EXAMPLES.indexOf(codeExample) === -1) {
    var message = 'Please choose an existent example:';
    message += '\n - ' + CODE_EXAMPLES.join('\n - ');
    console.error(message);
    return;
}
require('./examples/' + codeExample);
