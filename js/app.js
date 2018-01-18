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

app.controller('DncController', ['$http', function($http){
  const controller = this;

//Hide sections
  this.qualifications = true;
  this.background = true;
  this.mission = true;
  this.micDrop = true;

//Activate buttons
  this.showQualifications = function(){
    this.qualifications = false;
  }

  this.showBackground = function(){
    this.background = false;
  }

  this.showMission = function(){
    this.mission = false;
  }

  this.showMicDrop = function(){
    this.micDrop = false;
  }
}]); //end of DNC Controller
