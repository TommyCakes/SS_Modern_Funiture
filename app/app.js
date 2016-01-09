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
  .state('store.tables', {
    url: '/tables',
    templateUrl: 'app/states/tables.html'
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
.controller('buyCtrl', function() {
  var self = this;
  self.rose = {'Rose': 267}
  self.zinc = {'Zinc': 999}
  var checkout = []
  self.basketQuantity = 0;
  // self.sofa = [self.rose]
  this.buy = function(sofa) {
    console.log('Added to basket!')
    checkout.push(sofa)
    console.log(checkout)
    console.log(checkout.each)
    self.basketQuantity++;
  }
this.clear = function() {
  self.basketQuantity = 0;
}

})
