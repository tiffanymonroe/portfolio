const app = angular.module('website', []);


app.controller('MainController', ['$http', function($http){
  const controller = this;

  //show-hide logic, from Karolin
  this.portfolio = false;


  this.showPortfolio = function(){
    this.portfolio = !this.portfolio;
  };



}]); //end of controller
