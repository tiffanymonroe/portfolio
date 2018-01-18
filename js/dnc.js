const app = angular.module('website', []);

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
