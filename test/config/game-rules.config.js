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


module.exports.possibleChoices = possibleChoices;
module.exports.rules = rules;