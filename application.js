$(document).ready(function() {

  var container = new DieContainer();

  $('.add').on('click', function() {
    container.addDie();
    container.removeAllDieFromView();
    container.showAllDie();
  });

  $('.roll').on('click', function() {
      container.rollAllDie();
      container.removeAllDieFromView();
      container.showAllDie();
  });
  
});

  function Die() {
    this.val = randomNum();
  }

  Die.prototype.roll = function() {
      this.val = randomNum();
  };

  Die.prototype.show = function() {
      $('.dice').append("<div class='die'>" + this.val + "</div>");
  };

  // Die.prototype.remove = function() {
  //     this.empty();
  // };

  function DieContainer() {
    this.allDice = [];
  };

  DieContainer.prototype = {
    addDie: function() {
      this.allDice.push(new Die());
    },

    showAllDie: function() {
      for (var i = 0; i < this.allDice.length; i++) {
        this.allDice[i].show();
      }
    },

    removeAllDieFromView: function() {
      $('.dice').empty();
      // for (var i = 0; i < this.allDice.length; i++) {
      //   this.allDice[i].remove();
      // }
    },

    rollAllDie: function() {
      for (var i = 0; i < this.allDice.length; i++) {
        this.allDice[i].roll()
      }
    }
  };

  function randomNum() {
    return Math.floor((Math.random()*6)+1);
  }