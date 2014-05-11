module.exports = (grunt) ->
  (require 'load-grunt-tasks')(grunt)
  growl = require 'growl'

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    nodemon:
      dev:
        script: 'build/server/app.js'
        options:
          env:
            PORT: 8888
          ext: 'js'
          watch: ['build/server']
          callback: (nodemon) ->
            nodemon.on 'log', (event) ->
              console.log  event.colour
            nodemon.on 'config:update', ->
              growl 'Server has started'
              console.log 'Server has started'
            nodemon.on 'restart', ->
              growl 'Server has restarted'
              console.log 'Server has restarted'
            nodemon.on 'crash', ->
              growl 'Server has crashed'
              console.log 'Server has crashed'
    copy:
      js:
        src: ['**/*.js']
        dest: 'public/js/'
        cwd: 'src/client/'
        expand: true
      html:
        src: ['**/*.html']
        dest: 'public/js/'
        cwd: 'src/client/'
        expand: true
      jade:
        src: ['**/*.jade']
        dest: 'build/server/'
        cwd: 'src/server'
        expand: true
    stylus:
      compile:
        files:
          'public/css/application.css': ['src/client/stylus/application.styl']
    watch:
      styles:
        files: 'src/client/styles/**/*.styl'
        tasks: ['stylus:compile']
        options:
          atBegin: true
      clientCoffeeCompile:
        files: 'src/client/**/*.coffee'
        tasks: ['coffee:client']
        options:
          atBegin: true
      clientJsCopy:
        files: 'src/client/**/*,js'
        tasks: ['copy:js']
        options:
          atBegin: true
      clientTmplCopy:
        files: 'src/client/**/*.jade'
        tasks: ['jade:client']
        options:
          atBegin: true
      serverCoffeeCompile:
        files: 'src/server/**/*.coffee'
        tasks: ['coffee:server']
        options:
          atBegin: true
      serverJade:
        files: 'src/server/**/*.jade'
        tasks: ['copy:jade']
        options:
          atBegin: true
#      serverTests:
#        files: ['build/server/**/*.js', 'spec/server/**/*.js']
#        tasks: ['mochaTest:test']
#        options:
#          spawn: false
    concurrent:
      target:
        tasks: ['nodemon', 'watch']
        options:
          logConcurrentOutput: true
    shell:
      mongo:
        command: 'mongod'
        options:
          async: true
    mochaTest:
      test:
        src: ['spec/server/**/*.coffee']
        options:
          reporter: 'spec'
          clearRequireCache: true
          require: 'coffee-script/register'
    karma:
      unit:
        configFile: 'spec/client/karma.conf.js'
        runnerPort: 9999
    notify:
      server:
        options:
          message: 'Server has started'
      restart:
        options:
          message: 'Server has restarted'
      error:
        options:
          message: 'Server has crashed'
    coffee:
      client:
        expand: true
        cwd: 'src/client'
        src: '**/*.coffee'
        dest: 'public/js/'
        ext: '.js'
        sourceMap: true
      server:
        expand: true
        cwd: 'src/server'
        src: '**/*.coffee'
        dest: 'build/server'
        ext: '.js'
    jade:
      client:
        files: [
          cwd: 'src/client/'
          src: '**/*.jade'
          dest: 'public/js/'
          expand: true,
          ext: '.html'
        ]
        options:
          client: false



  # On watch events, if the changed file is a test file then configure mochaTest to only
  # run the tests from that file. Otherwise run all the tests
  defaultTestSrc = grunt.config 'mochaTest.test.src'
  grunt.event.on 'watch', (action, filepath) ->
    console.log 'Must run da testz'
    grunt.config 'mochaTest.test.src', defaultTestSrc

    if filepath.match 'spec/server'
      grunt.config 'mockaTest.test.src', 'filepath'

  grunt.registerTask 'default', ['shell:mongo', 'concurrent:target']
