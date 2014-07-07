module.exports = function(grunt) {
  grunt.config('connect', {
    server: {
      options: {
      	hostname: 'localhost',
      	protocol: 'http',
        port: 3333,
        base: 'app'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
};
