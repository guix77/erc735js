exports = module.exports = {};

exports.asciiToTopic = function(ascii) {
  let topic = '';
  for (i = 0; i < ascii.length; i++) {
    let character = ascii.charCodeAt(i).toString();
    // If character takes 2 decimals, add a 0.
    if (character.length === 2) {
      character = '0' + character;
    }
    // If character takes 1 decimals, add two 0s.
    else if (character.length === 1) {
      character = '00' + character;
    }
    topic = topic + character;
  }
  // If topic has a leading zero, remove it.
  if (topic.charAt(0) === '0') {
    topic = topic.substr(1);
  }
  // Do it again if topic had two zeros.
  if (topic.charAt(0) === '0') {
    topic = topic.substr(1);
  }
  return topic;
};

exports.topicToAscii = function(topic) {
  let ascii = '';
  // If topic misses one zero, add it.
  if (topic.length % 3 === 2) {
    topic = '0' + topic;
  }
  // If topic misses two zeros, add them.
  else if (topic.length % 3 === 1) {
    topic = '00' + topic;
  }
  const length = topic.length;
  for (i = 0; i < topic.length; i += 3) {
    ascii = ascii + String.fromCharCode(
      topic.charAt(i) + topic.charAt(i + 1) + topic.charAt(i + 2)
    );
  }
  return ascii;
}
