/*
* grunt-init-protractor-base
*
* Copyright (c) 2014 Ruairi O Brien
* Licensed under the MIT license.
*/

'use strict';

// Basic template description.
exports.description = 'Create a simple AngularJS project with some sample ' +
'Protractor tests. Also includes Gruntfile with test task.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Use this to create a simple starter project for playing ' +
'around with Protractor. Not really recomended as a base for a production ' +
'application.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
'install_. After that, you may execute project tasks with _grunt_. For ' +
'more information about installing and configuring Grunt, please see ' +
'the Getting Started guide:' +
'\n\n' +
'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version'),
    init.prompt('main'),
    init.prompt('npm_test', 'grunt test')
    ], function(err, props) {
      props.scripts = {
        "postinstall": "./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update"
      };
      props.keywords = [];
      props.devDependencies = {
        'grunt-contrib-concat': '~0.3.0',
        'grunt-contrib-uglify': '~0.2.0',
        'grunt-contrib-jshint': '~0.6.0',
        'grunt-contrib-watch': '~0.4.0',
        'grunt-protractor-runner': '~1.0.1',
        'grunt-contrib-connect': '~0.8.0'
      };

      // Files to copy (and process).
      var files = init.filesToCopy(props);

      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);

      // Actually copy (and process) files.
      init.copyAndProcess(files, props);

      // Generate package.json file.
      init.writePackageJSON('package.json', props);

      // All done!
      done();
    });

  };
