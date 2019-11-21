const possibleChoices = [
  'Rock',
  'Paper',
  'Scissors'
];

const rules = {
  'Rock': ['Scissors'],
  'Paper': ['Rock'],
  'Scissors': ['Paper']
};

const possibleChoicesWithLizardSpock = [
  'Rock',
  'Paper',
  'Scissors',
  'Lizard',
  'Spock'
];

const rulesWithLizardSpock = {
  'Rock': ['Scissors', 'Lizard'],
  'Paper': ['Rock', 'Spock'],
  'Scissors': ['Paper', 'Lizard'],
  'Lizard': ['Spock', 'Paper'],
  'Spock': ['Scissors', 'Rock']
};

module.exports.possibleChoices = possibleChoices;
module.exports.rules = rules;
module.exports.possibleChoicesWithLizardSpock = possibleChoicesWithLizardSpock;
module.exports.rulesWithLizardSpock = rulesWithLizardSpock;
