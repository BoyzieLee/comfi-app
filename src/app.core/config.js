function config ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/')

}

config.$inject = ['$urlRouterProvider', '$stateProvider'];
export { config };
