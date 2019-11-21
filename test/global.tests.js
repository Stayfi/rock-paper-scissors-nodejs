const assert = require('chai').assert;
const request = require('supertest');
const rootApp = require('../app');
const config = require('./config/app.config');
const projectAssertsFunctions = require('./assert-functions');
const playGameTests = require('./play-game.tests');
const gameService = require('../services/game.service');

const app = rootApp.app;
const setGameToLizardSpockTest = rootApp.setGameToLizardSpockTest;
const API_ROOT = '/api';

describe('Server tests:', () => {
  describe('Config', () => {
    it('Should port equal 3000', () => {
      assert.equal(config.port, 3000);
    });
  });

  describe('Started', () => {
    it('API should say "Hello World!"', async () => {
      const res = await request(app).get(API_ROOT + '/sayHello');
      projectAssertsFunctions.responseIsJson(res);
      assert.equal(res.body.i_say, 'Hello world!');
    });
  });

  describe('UI', () => {
    it('Should have response type "text/html"', async () => {
      const res = await request(app).get('/');
      projectAssertsFunctions.responseIsHtml(res);
    });

    it('Should have title "Rock, Paper, Scissors & Lizard, Spock"', async () => {
      const res = await request(app).get('/');
      assert.include(res.text, '<title>Rock, Paper, Scissors & Lizard, Spock</title>');
    });

    it('Should have button to computer play versus computer', async () => {
      const res = await request(app).get('/');
      projectAssertsFunctions.responseIsHtml(res);
      assert.include(res.text, '<span class="fa fa-desktop fa-lg" aria-hidden="true"></span>');
    });
  });
});


describe('Can I Play Rock, Paper, Scissors:', function () {
  playGameTests('');
});

describe('Set Game To Lizard Spock', () => {
  it('Should set variable res.locals.gammeLizardSpockSelected to true', () => {
    let req = {};
    let res = { locals: { gammeLizardSpockSelected: false } };
    const gameToLizardSpock = setGameToLizardSpockTest(req, res, projectAssertsFunctions.assertGammeLizardSpockSelected);
    assert.isTrue(gameToLizardSpock);
  });
});

describe('Can I Play Rock, Paper, Scissors, Lizard, Spock:', function () {
  playGameTests('lizardSpock');
});
