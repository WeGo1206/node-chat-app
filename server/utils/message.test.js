var expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jack';
    var text = 'is here';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
