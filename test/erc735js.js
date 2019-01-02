const assert = require('assert');
const erc735js = require('../index.js');

describe('erc735js', function() {
  describe('asciiToTopic', function() {
    it('Should convert ASCII property names to BigNumber topics', async() => {
      const result1 = erc735js.asciiToTopic('givenName');
      assert.equal(result1, '103105118101110078097109101');
      const result2 = erc735js.asciiToTopic('additionalName');
      assert.equal(result2, '97100100105116105111110097108078097109101');
    });
  });
  describe('erc735js.topicToAscii', function() {
    it('Should convert BigNumber topics to ASCII property names', async() => {
      const result1 = erc735js.topicToAscii('103105118101110078097109101');
      assert.equal(result1, 'givenName');
      const result2 = erc735js.topicToAscii('97100100105116105111110097108078097109101');
      assert.equal(result2, 'additionalName');
    });
  });
});
