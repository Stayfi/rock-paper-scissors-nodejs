const assert = require('chai').assert;

module.exports = {
  responseIsHtml: function (res) {
    assert.equal(res.status, 200);
    assert.equal(res.type, 'text/html');
  },

  responseIsJson: function (res) {
    assert.equal(res.status, 200);
    assert.equal(res.type, 'application/json');
  },

  isValidPlayer: function (playerNumero, playerValue) {
    assert.exists(playerValue, `There is no player_${playerNumero} in body response`);
    assert.isString(playerValue, `Player_${playerNumero} is not a string`);
    assert.isNotEmpty(playerValue, `Player_${playerNumero} is empty`);
  },

  assertGammeLizardSpockSelected: function (gammeLizardSpockSelected) {
    assert.isTrue(gammeLizardSpockSelected);
  }
};