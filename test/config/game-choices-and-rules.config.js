const possibleChoicesTest = [
  'Rock',
  'Paper',
  'Scissors'
];

const rulesTest = {
  'Rock': ['Scissors'],
  'Paper': ['Rock'],
  'Scissors': ['Paper']
};

const possibleChoicesWithLizardSpockTest = [
  'Rock',
  'Paper',
  'Scissors',
  'Lizard',
  'Spock'
];

const rulesWithLizardSpockTest = {
  'Rock': ['Scissors', 'Lizard'],
  'Paper': ['Rock', 'Spock'],
  'Scissors': ['Paper', 'Lizard'],
  'Lizard': ['Spock', 'Paper'],
  'Spock': ['Scissors', 'Rock']
};

module.exports.possibleChoices = possibleChoicesTest;
module.exports.rules = rulesTest;
module.exports.possibleChoicesWithLizardSpock = possibleChoicesWithLizardSpockTest;
module.exports.rulesWithLizardSpock = rulesWithLizardSpockTest;
