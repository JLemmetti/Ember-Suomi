# Ember Suomi

(Ember Suomi)[https://embersuomi.fi] is a blog that covers things about Ember.js framework and overall web developement topics in Finnish. This page is unaffiliated with the Ember project. Ember is a trademark of Tilde Inc.

The development version of this project can be found at [https://ember-suomi-dev.firebaseapp.com/](https://ember-suomi-dev.firebaseapp.com/).

# How to contribute

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [Firebase CLI](https://github.com/firebase/firebase-tools)

## Installation

* `git clone https://github.com/JLemmetti/ember-suomi.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

`firebase use <project>` (`default` for development version or `production` for production)

`firebase deploy`
