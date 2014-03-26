module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			dev:{
				script: 'server.js',
				options: {
					env: {
						PORT: 8888
					},
					ext: 'js'
				}
			}
		}
	});

	grunt.registerTask('default', ['nodemon']);
};