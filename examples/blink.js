var five = require('johnny-five');
var board = new five.Board();

var CONFIG = {
  LED: 12,
  TIMEOUT: 50
};

board.on('ready', function() {
  var led = new five.Led(CONFIG.LED);
  led.blink(CONFIG.TIMEOUT);
});
