requirejs.config
  paths:
    text: '../vendor/requirejs-text/text'
    durandal: '../vendor/durandal/js'
    plugins: '../vendor/durandal/js/plugins'
    'plugins/zPortal': './plugins'
    transitions: '../vendor/durandal/js/transitions'
    knockout: '../vendor/knockout.js/knockout'
    knockoutEs5: '../vendor/knockout-es5-passy/dist/knockout-es5'
    bootstrap: '../vendor/bootstrap/dist/js/bootstrap'
    jquery: '../vendor/jquery/jquery'
  shims:
    bootstrap:
      deps: ['jquery']
      exports: 'jQuery'

define ['durandal/system', 'durandal/app', 'durandal/viewLocator'], (system, app, viewLocator) ->
  system.debug true

  app.title = 'zPortal'

  app.configurePlugins
    router: true
    widget: true
    'zPortal/dialog':
      messageBoxView: 'views/dialogbox.html'

  app.start().then ->
    viewLocator.useConvention()
    app.setRoot 'viewmodels/shell', 'entrance'