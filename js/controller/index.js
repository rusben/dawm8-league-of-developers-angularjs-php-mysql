// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
  // This is the instance of our angular app
  // TODO
  // http://stackoverflow.com/questions/20087627/how-to-create-separate-angularjs-controller-files
  var app = angular.module("LeagueOfDevelopersApp", []);

  app.controller("MainController", function($scope) {
    // Controller properties

    // Scope variables 
    $scope.action = "players";

    this.initializeFields = function () {

    };

    // Methods
    this.go = function () {
      //this.initializeFields();
      
      if ($scope.action == "players") {
        alert("players");
      } 

      if ($scope.action == "teams") {
        alert("teams");
      } 

      if ($scope.action == "calendar") {
        alert("calendar");
      } 

      if ($scope.action == "statistics") {
        alert("statistics");
      } 

    };

    this.addDates = function() {
      alert("addDates");
    };

    this.initializeFields();

    
  });
  
app.controller("PlayersController", function($scope, $http) {
    // Change this connection string with your own
    $http.get("http://exemple.local/league-of-developers/api/players.php")
    .then(function (response) {$scope.players = response.data.records;});
});


  /*
    The restrict option is typically set to:

    'A' - only matches attribute name
    'E' - only matches element name
    'C' - only matches class name
    'M' - only matches comment
  */

  app.directive("playersView", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl:"view/templates/players-view.html",
      controller: function() {
        // When the document is ready execute this code
      },
      controllerAs: 'PlayersViewCtrl' // This is the alias
    };
  });
/*
  app.directive("teamsView", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl:"view/templates/teams-view.html",
      controller: function() {
        // When the document is ready execute this code
      },
      controllerAs: 'TeamsViewCtrl' // This is the alias
    };
  });

  app.directive("calendarView", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl:"view/templates/calendar-view.html",
      controller: function() {
        // When the document is ready execute this code
      },
      controllerAs: 'CalendarViewCtrl' // This is the alias
    };
  });

  app.directive("StatisticsView", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl:"view/templates/statistics-view.html",
      controller: function() {
        // When the document is ready execute this code
      },
      controllerAs: 'StatisticsViewCtrl' // This is the alias
    };
  });
*/

})();
