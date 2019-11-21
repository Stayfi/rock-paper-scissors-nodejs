const gameConfig = require('../config/game-choices-and-rules.config');
const mathTools = require('../tools/math.tools');

module.exports = {
  getComputerChoice: (resLocals) => {
    let possibleChoices = module.exports.getPossibleChoicesAccordingGameSelected(resLocals);
    let idxChoice = mathTools.getRandomInt(possibleChoices.length - 1);
    let computerChoice = possibleChoices[idxChoice];
    return computerChoice;
  },

  selectWinner: (gammeLizardSpockSelected, player_1, player_2) => {
    let winner = 0;
    let rules = module.exports.getRulesAccordingGameSelected(gammeLizardSpockSelected);
    if (rules[player_1] && rules[player_1].includes(player_2)) {
      winner = 1;
    }
    else if (rules[player_2] && rules[player_2].includes(player_1)) {
      winner = 2;
    }
    return winner;
  },

  getPossibleChoicesAccordingGameSelected: function (gammeLizardSpockSelected) {
    if (gammeLizardSpockSelected) {
      return gameConfig.possibleChoicesWithLizardSpock;
    } else {
      return gameConfig.possibleChoices;
    }
  },

  getRulesAccordingGameSelected: function (gammeLizardSpockSelected) {
    if (gammeLizardSpockSelected) {
      return gameConfig.rulesWithLizardSpock;
    } else {
      return gameConfig.rules;
    }
  }
};