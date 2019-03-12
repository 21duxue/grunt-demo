module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{

      }
    }
      
  });

    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('default', ['mochacli']);   
    grunt.registerTask('cover', ['mocha_istanbul']);
    grunt.registerTask('check-cover', ['istanbul_check_coverage']);

};

