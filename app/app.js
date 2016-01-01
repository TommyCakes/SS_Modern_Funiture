angular.module('App', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: 'app/states/home.html'
  })
  .state('store', {
    url: "/store",
    templateUrl: 'app/states/store.html'
  })
  .state('store.sofas', {
    url: '/sofas',
    templateUrl: 'app/states/sofas.html'
  })
  .state('store.beds', {
    url: '/beds',
    templateUrl: 'app/states/beds.html'
  })
  .state('store.misc', {
    url: '/misc',
    templateUrl: 'app/states/misc.html'
  })
  .state('about', {
    url: "/about",
    templateUrl: 'app/states/about.html'
  })
  .state('contact', {
    url: "/contact",
    templateUrl: 'app/states/contact.html'
  })
  .state('cart', {
    url: "/cart",
    templateUrl: 'app/states/cart.html'
  })
})
