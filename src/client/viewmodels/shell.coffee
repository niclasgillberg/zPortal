define ['plugins/router', 'bootstrap', 'jquery'], (router, bootstrap, $) ->
  activate: ->
    (router.map [
      {route: '', title: 'Dashboard', moduleId: 'modules/dashboard/viewmodels/dashboard'},
      {route: 'products', title: 'Products', moduleId: 'modules/products/viewmodels/productModule', nav: 1},
      {route: 'approvals', title: 'Approvals', moduleId: 'modules/orders/viewmodels/approvals', nav: 2}
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