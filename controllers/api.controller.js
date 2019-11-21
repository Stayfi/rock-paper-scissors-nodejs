const gameService = require('../services/game.service');

const DEBUG_GAMME_RESULT = false;

module.exports = {
  sayHello: (req, res, next) => {
    return res.status(200).json({ i_say: 'Hello world!' });
  },

  getChoices: (req, res, next) => {
    const gammeLizardSpockSelected = res.locals.gammeLizardSpockSelected ? res.locals.gammeLizardSpockSelected : false;
    let possibleChoices = gameService.getPossibleChoicesAccordingGameSelected(gammeLizardSpockSelected);
    return res.status(200).json(possibleChoices);
  },

  humanVsComputer: (req, res, next) => {
    const gammeLizardSpockSelected = res.locals.gammeLizardSpockSelected ? res.locals.gammeLizardSpockSelected : false;
    let humanChoice = req.params.humanChoice;
    let possibleChoices = gameService.getPossibleChoicesAccordingGameSelected(gammeLizardSpockSelected);
    if (!possibleChoices.includes(humanChoice)) {
      return res.sendStatus(400);
    }
    let computerChoice = gameService.getComputerChoice(gammeLizardSpockSelected);
    let response = {
      player_1: humanChoice,
      player_2: computerChoice,
      winner: gameService.selectWinner(gammeLizardSpockSelected, humanChoice, computerChoice)
    };
    debugGammeResult(response);
    return res.send(response);
  },

  computerVsComputer: (req, res, next) => {
    const gammeLizardSpockSelected = res.locals.gammeLizardSpockSelected ? res.locals.gammeLizardSpockSelected : false;
    let computer_1_Choice = gameService.getComputerChoice(gammeLizardSpockSelected);
    let computer_2_Choice = gameService.getComputerChoice(gammeLizardSpockSelected);
    let response = {
      player_1: computer_1_Choice,
      player_2: computer_2_Choice,
      winner: gameService.selectWinner(gammeLizardSpockSelected, computer_1_Choice, computer_2_Choice)
    };
    debugGammeResult(response);
    return res.send(response);
  }
};

function debugGammeResult(response) {
  if (DEBUG_GAMME_RESULT) {
    console.log('        \033[0;32m->\033[1;37m ', response);
  }
}