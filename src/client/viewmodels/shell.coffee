define ['plugins/router', 'bootstrap', 'jquery'], (router, bootstrap, $) ->
  activate: ->
    (router.map [
      {route: '', title: 'Dashboard', moduleId: 'viewmodels/dashboard'},
      {route: 'boards', title: 'Boards', moduleId: 'viewmodels/boards', nav: 1}
    ]).buildNavigationModel().activate()
  router: router
  attached: (view) ->
    group = ($ view).find '.navbar-form[role="search"] .input-group'
    (group.find 'input').on('focus', ->
      group.addClass 'focused'
      return
    ).on 'blur', ->
      group.removeClass 'focused'
      return
  logout: ->
    window.location = '/logout'