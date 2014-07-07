# {%= name %}

> {%= description %}

## Getting Started

### Install Global Dependencies

It should be safe to assume node and git are installed if you have pulled this
project down but on the off chance...

You need [node](http://nodejs.org/)

You also need [git](http://git-scm.com/)

Once node is installed you should have the node package manager,
[npm](https://www.npmjs.org/), available on the command line.

You can now use npm to install required dependencies.

Open a terminal.
If you are running Linux or Mac you may need to use sudo for commands with
'npm install -g'

1. Install [grunt](http://gruntjs.com/) if you haven't already
```bash
npm install -g grunt
```
1. Install [protractor](https://github.com/angular/protractor)
```bash
npm intall -g protractor
```
2. Install [webdriver](http://docs.seleniumhq.org/docs/03_webdriver.jsp)
using the manager bundled with protractor
```bash
webdriver-manager update
```

### Install Project Dependencies

Install package.json dependencies from the project root with: `npm install`

This will create a node_modules directory in the project root and download
any project dependencies defined in package.json to that directory.

### Running the Tests

You can run one of two commands:

```bash
npm test
```

or

```bash
grunt test
```

Currently there is no difference between the two commands as npm test simply
calls grunt test but you may choose to alter that behaviour at some stage.


## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}  
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
