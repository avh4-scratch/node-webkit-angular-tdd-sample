module.exports = function(grunt) {

    grunt.initConfig({
        nodewebkit: {
            options: {
                build_dir: './build',
                mac: true,
                win: true,
                linux64: true
            },
            src: [
                './index.html',
                './package.json',
                './bower_components/angular/angular.min.js',
                './bower_components/bootstrap/dist/css/bootstrap.min.css',
                './bower_components/bootstrap/dist/js/bootstrap.min.js',
                './bower_components/jquery/dist/jquery.min.js',
                './js/HelloController.js',
            ]
        }
    })

    grunt.loadNpmTasks('grunt-node-webkit-builder');
};
