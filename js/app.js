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
  this.toggleQualifications = function(){
    this.qualifications =! this.qualifications;
  }

  this.toggleBackground = function(){
    this.background =! this.background;
  }

  this.toggleMission = function(){
    this.mission =! this.mission;
  }

  this.toggleMicDrop = function(){
    this.micDrop =! this.micDrop;
  }
}]); //end of DNC Controller
