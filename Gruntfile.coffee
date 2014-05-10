module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);
	var growl = require('growl');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			dev:{
				script: 'build/server/app.js',
				options: {
					env: {
						PORT: 8888
					},
					ext: 'js',
					watch: ['build/server'],
					callback: function(nodemon){
						nodemon.on('log', function (event) {
							console.log(event.colour);
						});
						nodemon.on('config:update', function () {
							growl('Server has started');
							console.log('Server has started');
						});
						nodemon.on('restart', function () {
							// Delay before server listens on port
							growl('Server has restarted');
						});
						nodemon.on('crash', function () {
							// Delay before server listens on port
							growl('Server has crashed');
							console.log('Server has crashed');
						});
					}
				}
			}
		},
		copy: {
      js: {
        src: ['**/*.js'],
        dest: 'public/js/',
        cwd: 'src/client/',
        expand: true
      },
			html: {
				src: ['**/*.html'],
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
			clientCoffeCompile: {
				files: ['src/client/**/*.coffee'],
				tasks: ['coffee:client'],
				options: {
					atBegin: true
				}
			},
			clientJsCopy: {
				files: ['src/client/**/*.js'],
				tasks: ['copy:js'],
				options: {
					atBegin: true
				}
			},
			clientTmplCopy: {
				files: ['src/client/**/*.html'],
				tasks: ['copy:html'],
				options: {
					atBegin: true
				}
			},
      serverCoffeCompile: {
        files: ['src/server/**/*.coffee'],
        tasks: ['coffee:server'],
        options: {
          atBegin: true
        }
      },
			serverTests: {
				files: ['src/server/**/*.js', 'spec/server/**/*.js'],
				tasks: ['mochaTest:test'],
				options: {
					spawn: false
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
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					clearRequireCache: true
				},
				src: ['spec/server/**/*.js']
			}
		},
		karma: {
			unit: {
				configFile: 'spec/client/karma.conf.js',
				runnerPort: 9999
			}
		},
		notify: {
			server: {
				options: {
					message: 'Server has started'
				}
			},
			restart: {
				options: {
					message: 'Server has restarted'
				}
			},
			error: {
				options: {
					message: 'Server has crashed'
				}
			}
		},
    coffee: {
      client: {
        expand: true,
        cwd: 'src/client/',
        src: ['**/*.coffee'],
        dest: 'public/js/',
        ext: '.js'
      },
      server: {
        expand: true,
        cwd: 'src/server',
        src: '**/*.coffee',
        dest: 'build/server',
        ext: '.js'
      }
    }
	});

	// On watch events, if the changed file is a test file then configure mochaTest to only
	// run the tests from that file. Otherwise run all the tests
	var defaultTestSrc = grunt.config('mochaTest.test.src');
	grunt.event.on('watch', function(action, filepath) {
		console.log('Must run da testz');
		grunt.config('mochaTest.test.src', defaultTestSrc);
		if (filepath.match('spec/server')) {
			grunt.config('mochaTest.test.src', filepath);
		}
	});

	grunt.registerTask('default', ['shell:mongo', 'concurrent:target']);
};