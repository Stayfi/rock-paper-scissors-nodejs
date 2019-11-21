const gameService = require('../services/game.service');

module.exports = {
  index: (req, res, next) => {
    const tplParams = {
      possibleChoices: gameService.getPossibleChoicesAccordingGameSelected(false),
      gameTitle: "Rock, Paper, Scissors",
      switchGameRoute: 'lizardSpock',
      switchGameText: 'Play with Lizard & Spock'
    };
    return res.render("index", tplParams);
  },

  indexLizardSpock: (req, res, next) => {
    const tplParams = {
      possibleChoices: gameService.getPossibleChoicesAccordingGameSelected(true),
      gameTitle: "Rock, Paper, Scissors & Lizard, Spock",
      switchGameRoute: '',
      switchGameText: 'Play without Lizard & Spock'
    };
    return res.render("index", tplParams);
  }
};