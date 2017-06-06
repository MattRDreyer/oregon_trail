(function() {
  'use strict';

  function makeTraveler(name) {
    let food = Math.round(Math.random()*100); //produces random whole number 1-100
    return new Traveler(food, name, true);
  }

  function makeWagon(capacity) {
    return new Wagon(capacity);
  }

  //hunt with a 50% chance of success
  function hunt(Traveler) {
    let success = 100;
    if (Math.random() > 0.5);
    Traveler.setFood(success);
  }

  //eat, always lose 20
  function eat(Traveler) {
    let eat = -20;
    Traveler.setFood(eat);
  }

  function join(Wagon, Traveler) {
    if (wagon.capacity <= 5) {//if statement without else
    Wagon.addPassengerList(Traveler);
    }
  }

  //checking food on the wagon
  function food(wagon){
    let count = 0;
    for (var i = 0; i < wagon.passengerList.length; i++) {
      count = count + wagon.passengerList[i].getFood();
    }
    return count;
  }

  //create traveler object
  function Traveler(food, name, isHealthy) {
    var food = food;
    var name = name;
    var isHealthy = isHealthy;

    this.getName = function() {
      return name;
    }
    this.getFood = function() {
      return food;
    }
    this.setFood = function(x) {
      food = food + x;
    }
  }

  //create wagon object
  function Wagon(capacity, passengerList) {
    this.capacity = capacity;
    this.passengerList = [];

    this.addPassengerList = function(travelName) {
    this.passengerList.push(travelName);
    }
  }

  //checking if any passengers have food
  function quarantine(wagon) {
    for (var i = 0; i < wagon.passengerList.length; i++) {
      if ((wagon.passengerList[i].getFood()) < 20) {
        return true;
      }
    }
    return false;
  }

  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');

  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry
  join(wagon, traveler);
  join(wagon, traveler2);

  console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log(food(wagon)); // print juan's food + henrietta's food

  })();
