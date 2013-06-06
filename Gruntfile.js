module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    emberTemplates: {
      compile: {
        options: {
          templateName: function(sourceFile) {
            return sourceFile.replace(/public\/src\/app\/templates\//, '');
          }
        },
        files: {
          "public/src/app/templates.js": "public/src/app/templates/**/*.hbs"
        }
      }
    },

    watch: {
      emberTemplates: {
        files: 'public/src/app/templates/**/*.hbs',
        tasks: ['emberTemplates:compile']
      },
    }
  });

  grunt.registerTask('default', ['emberTemplates']);

  grunt.registerTask('dev', ['watch:emberTemplates']);

}