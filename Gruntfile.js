module.exports = function (grunt) {
  grunt.initConfig({
    concat:{

    dist: {
        src: ['calc.js', 'rectangle.js'],
        dest: 'dist/built.js',
      
    },
  }      
  });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);

};

