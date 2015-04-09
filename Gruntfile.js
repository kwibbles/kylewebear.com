module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      build: {
        options: {
          port: 1986,
          base: 'build'
        }
      }
    },
    watch: {
      build: {
        files: ['src/**/*'],
        tasks: []
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['*'],
            dest: 'build'
          },
          {
            expand: true,
            cwd: 'src/artwork',
            src: ['*'],
            dest: 'build/artwork'
          },
          {
            expand: true,
            cwd: 'src/beta',
            src: ['**/*'],
            dest: 'build/beta'
          },
          {
            expand: true,
            cwd: 'src/images',
            src: ['*'],
            dest: 'build/images'
          },
          {
            src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
            dest: 'build/assets/bootstrap.min.css'
          }
        ]
      }
    },
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: '**/*'
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('build', ['copy']);

  grunt.registerTask('deploy', ['build', 'gh-pages']);

  grunt.registerTask('default', ['build', 'connect', 'watch']);

};