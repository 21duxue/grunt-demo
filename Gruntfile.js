module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
                  'dest/min.js': 'rectangle.js'
          
        }
                   
      }
                   
    }
      
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);   

};

