app.config [
  '$stateProvider',
  '$urlRouterProvider',
  (state, routerProvider) ->
    routerProvider.otherwise '/'

    state.state 'home',
      url: '/'
      templateUrl: 'dashboard/index.html'
    .state 'products',
      url: '/products'
      templateUrl: 'products/index.html'
    .state 'services',
      url: '/services'
      templateUrl: 'services/index.html'
    .state 'resources',
      url: '/resources'
      templateUrl: 'resources/index.html'
    .state 'history',
      url: '/history'
      templateUrl: 'history/index.html'
    .state 'approvals',
      url: '/approvals'
      templateUrl: 'approvals/index.html'
    .state 'profile',
      url: '/profile'
      templateUrl: 'user/profile.html'
    return
]