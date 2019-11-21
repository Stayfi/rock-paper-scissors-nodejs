const express = require('express');
const config = require('./config/app.config');
const apiRouter = require('./routes/api.route');
const uiRouter = require('./routes/ui.route');

const app = express();
app.set('view engine', 'ejs');

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/api/lizardSpock', setGameToLizardSpock, apiRouter);
app.use('/api', apiRouter);
app.use('/', uiRouter);

function setGameToLizardSpock(req, res, next) {
  res.locals.gammeLizardSpockSelected = true;
  if (next) {
    next();
  } else {
    return res.locals.gammeLizardSpockSelected;
  }
}

module.exports = {
  app: app,

  setGameToLizardSpockTest: (req, res) => {
    return setGameToLizardSpock(null, res, null);
  }
};
