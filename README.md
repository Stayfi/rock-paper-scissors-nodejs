# Rock, Paper, Scissors & Lizard, Spock (Node.js)

version: 'v1.0.6'

[![Build Status](https://travis-ci.org/Stayfi/rock-paper-scissors-nodejs.svg?branch=master)](https://travis-ci.org/Stayfi/rock-paper-scissors-nodejs)
[![Coverage Status](https://coveralls.io/repos/github/Stayfi/rock-paper-scissors-nodejs/badge.svg?branch=develop)](https://coveralls.io/github/Stayfi/rock-paper-scissors-nodejs?branch=develop)

## Description

For an interview, i was asked to dev this game with thoses users story:

- Front

  As a frequent games player,

  I'd like to play rock, paper, scissors

  So that I can spend an hour of my day havind fun

  Acceptance Criteria:

  - Can I play Player vs Computer?
  - Can I play Computer vs Computer?
  - Can I play a different game each time?

- Back

  Technical Constraints:

  - Doesn't necessarly need a flashy GUI (can be simple)
  - Use <s>PHP</s> _(Scala or Javascript)_
  - Libs / external modules should only be used for tests
  - Using best in industry agile engineering practices

Best if we use TDD, code coverage, copy and paste detection, designs (DDD, or design patterns).

So, i tried to use my "code-sens" to doing my best in less than one day, starting from scratch.

You will find here, an example of TDD, with a lot of tests.

### Prepare your envionement

### Clone the project in your workspace

```bash
    $ git clone https://github.com/Stayfi/rock-paper-scissors-nodejs.git
```

### install dependencies

Go to the project directory and do

```bash
    $ npm install
```

### Start the project

```bash
    $ npm run start
```

Open your browser to : http://localhost:3000

### Running tests

```bash
    $ npm run test
```

![Test results](https://github.com/Stayfi/rock-paper-scissors-nodejs/raw/master/img/test_result.png)

### Running coverage

```bash
    $ npm run coverage
```

![Coverage results](https://github.com/Stayfi/rock-paper-scissors-nodejs/raw/master/img/coverage_result.png)

### Running copy/paste detection

```bash
    $ npm run jscpd
```

![Jscpd results](https://github.com/Stayfi/rock-paper-scissors-nodejs/raw/master/img/jscpd_result.png)
