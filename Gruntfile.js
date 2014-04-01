module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			dev:{
				script: 'src/server.js',
				options: {
					env: {
						PORT: 8888
					},
					ext: 'js'
				}
			}
		},
		copy: {
			js: {
				src: ['**/*.js', '**/*.html'],
				dest: 'public/js/',
				cwd: 'src/client/',
				expand: true
			}
		},
		stylus: {
			compile: {
				files: {
					'public/css/application.css': ['src/client/styles/application.styl']
				}
			}
		},
		watch: {
			styles: {
				files: 'src/client/styles/*.styl',
				tasks: ['stylus:compile'],
				options: {
					atBegin: true
				}
			},
			javascript: {
				files: ['src/client/**/*.js', 'src/client/**/*.html'],
				tasks: ['copy:js'],
				options: {
					atBegin: true
				}
			}
		},
		concurrent: {
			target: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		shell: {
			mongo: {
				command: 'mongod',
				options: {
					async: true
				}
			}
		}
	});

	grunt.registerTask('default', ['shell:mongo','concurrent:target']);
};