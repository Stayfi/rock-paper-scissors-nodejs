const assert = require('chai').assert;
const request = require('supertest');
const app = require('../app').app;
const gameService = require('../services/game.service');
const mathTools = require('../tools/math.tools');
const projectAssertsFunctions = require('./assert-functions');


module.exports = function (gammeLizardSpockSelected) {
  let URL_ROOT = '';
  let API_ROOT = '/api';
  if (gammeLizardSpockSelected) {
    URL_ROOT = URL_ROOT + '/lizardSpock';
    API_ROOT = API_ROOT + '/lizardSpock';
  }
  let possibleChoices = gameService.getPossibleChoicesAccordingGameSelected(gammeLizardSpockSelected);

  describe('UI', () => {
    let shoulButtonsText = 'Should have buttons "Rock, Paper, Scissors"';
    if (gammeLizardSpockSelected) {
      shoulButtonsText = 'Should have buttons "Rock, Paper, Scissors & Lizard, Spock"';
    }
    it(shoulButtonsText, async () => {
      const res = await request(app).get(URL_ROOT);
      projectAssertsFunctions.responseIsHtml(res);
      possibleChoices.forEach(key => {
        assert.include(res.text, '<span class="fa fa-hand-' + key.toLowerCase() + '-o fa-lg" aria-hidden="true">&nbsp;' + key + '</span>');
      });
    });
  });

  describe('API tests', () => {
    describe('Get possibles choices', () => {
      it('Should response json', async () => {
        const resChoices = await request(app).get(API_ROOT + '/getChoices');
        projectAssertsFunctions.responseIsJson(resChoices);

        it('Should send all possible choices', async () => {
          const resChoices = await request(app).get(API_ROOT + '/getChoices');
          assert.equal(typeof possibleChoices, typeof resChoices.body);
          assert.equal(JSON.stringify(possibleChoices), JSON.stringify(resChoices.body));
        });
      });
    });

    describe('Player vs Computer', () => {
      it('Computer should not let me play without choosing', async () => {
        const res = await request(app).get(API_ROOT + '/humanVsComputer');
        assert.equal(res.status, 400);
      });

      it('Computer should not let me play with wrong choice', async () => {
        const myChoice = getMyChoice(possibleChoices) + getMyChoice(possibleChoices);
        const res = await request(app).get(API_ROOT + '/humanVsComputer/' + myChoice);
        assert.equal(res.status, 400);
      });

      it('Computer should let me play', async () => {
        const myChoice = getMyChoice(possibleChoices);
        const res = await request(app).get(API_ROOT + '/humanVsComputer/' + myChoice);
        projectAssertsFunctions.responseIsJson(res);
        projectAssertsFunctions.isValidPlayer('1', res.body.player_1);
      });

      it('Computer should send my choice in the response', async () => {
        const myChoice = getMyChoice(possibleChoices);
        const res = await request(app).get(API_ROOT + '/humanVsComputer/' + myChoice);
        projectAssertsFunctions.responseIsJson(res);
        assert.equal(res.body.player_1, myChoice);
      });

      it('Computer should play too', async () => {
        const myChoice = getMyChoice(possibleChoices);
        const res = await request(app).get(API_ROOT + '/humanVsComputer/' + myChoice);
        projectAssertsFunctions.responseIsJson(res);
        projectAssertsFunctions.isValidPlayer('2', res.body.player_2);
      });

      it('Computer should decide who win', async () => {
        const myChoice = getMyChoice(possibleChoices);
        const res = await request(app).get(API_ROOT + '/humanVsComputer/' + myChoice);
        projectAssertsFunctions.responseIsJson(res);
        assert.exists(res.body.winner, 'There is no "winner" in body response');
      });


      it('selectWinner should response a draw when same choices', async () => {
        const myChoice = getMyChoice(possibleChoices);
        winner = gameService.selectWinner(myChoice, myChoice);
        assert.equal(winner, 0);
      });
    });

    describe('Computer vs Computer', () => {
      it('Computer Player 1 should play', async () => {
        const res = await request(app).get(API_ROOT + '/computerVsComputer');
        projectAssertsFunctions.responseIsJson(res);
        projectAssertsFunctions.isValidPlayer('1', res.body.player_1);
      });

      it('Computer Player 1 should send his choice in response is valid', async () => {
        const res = await request(app).get(API_ROOT + '/computerVsComputer');
        projectAssertsFunctions.responseIsJson(res);
        assert.include(possibleChoices, res.body.player_1, `Player_1 choice is not possible`);
      });

      it('Computer Player 2 should play too and send', async () => {
        const res = await request(app).get(API_ROOT + '/computerVsComputer');
        projectAssertsFunctions.isValidPlayer('2', res.body.player_2);
      });

      it('Computer Player 2 should send his choice in response is valid', async () => {
        const res = await request(app).get(API_ROOT + '/computerVsComputer');
        projectAssertsFunctions.responseIsJson(res);
        assert.include(possibleChoices, res.body.player_2, `Player_2 choice is not possible`);
      });

      it('Computer should decide who win', async () => {
        const res = await request(app).get(API_ROOT + '/computerVsComputer');
        projectAssertsFunctions.responseIsJson(res);
        assert.exists(res.body.winner, 'There is no "winner" in body response');
      });
    });

    describe('Different game each time', () => {
      it('Should give me different response each game', async () => {
        const resGame_1 = await request(app).get(API_ROOT + '/computerVsComputer');
        const resGame_2 = await request(app).get(API_ROOT + '/computerVsComputer');
        const resGame_3 = await request(app).get(API_ROOT + '/computerVsComputer');
        assert.notEqual(resGame_1.notEody, resGame_2.body, '3 games in a row are identical');
        assert.notEqual(resGame_1.notEody, resGame_3.body, '3 games in a row are identical');
        assert.notEqual(resGame_2.notEody, resGame_3.body, '3 games in a row are identical');
      });
    });
  });
};

function getMyChoice(possibleChoices) {
  let idxChoice = mathTools.getRandomInt(possibleChoices.length - 1);
  return possibleChoices[idxChoice];
}