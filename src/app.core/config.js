function config ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/')

}

$stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'template/layout.tpl.html'
  })

;

config.$inject = ['$urlRouterProvider', '$stateProvider'];
export { config };
