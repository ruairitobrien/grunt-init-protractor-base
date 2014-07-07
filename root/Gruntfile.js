'use strict';

module.exports = function(grunt) {

  grunt.loadTasks('grunt-tasks');


  // Default task.
  grunt.registerTask('test', ['connect:server', 'protractor']);
  grunt.registerTask('default', ['protractor']);
};
