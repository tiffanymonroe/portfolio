const app = angular.module('website', []);


app.controller('MainController', ['$http', function($http){
  const controller = this;

  //show-hide logic, from Karolin
  this.main = true;
  this.title = true;
  this.portfolio = false;


  this.showPortfolio = function(){
    this.portfolio = true;
    this.main = false;
    this.title = false;

  };

  this.hidePortfolio = function(){
      this.main = true;
      this.title = true;
      this.portfolio = false;
  };

  if(this.portfolio === false){
    this.main = true;
    this.title = true;
  }

}]); //end of controller
