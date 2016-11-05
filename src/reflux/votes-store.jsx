var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var VotesStore = Reflux.createStore({
    listenables: [Actions],
    getBkVotes: function() {
      HTTP.get('/bkYes')
      .then(function(json){
        this.bkYes = json;
        this.fireUpdateBk();
      }.bind(this));
    },
    getMcdVotes: function() {
      HTTP.get('/mcdYes')
      .then(function(json){
        this.mcdYes = json;
        this.fireUpdateMcd();
      }.bind(this));
    },
    bkVote: function(num) {
      if (!this.bkYes) {
        this.bkYes = [];
      };

      var aBkVote = {
        "id": "",
        "vote": num
      };

      this.bkYes.push(aBkVote);
      this.fireUpdateBk();

      HTTP.post('/bkYes', aBkVote)
      .then(function(response) {
        this.getBkVotes();
      }.bind(this));

    },
    mcdVote: function(num) {
      if (!this.mcdYes) {
        this.mcdYes = [];
      };

      var aMcdVote = {
        "id": "",
        "vote": num
      };

      this.mcdYes.push(aMcdVote);
      this.fireUpdateMcd();

      HTTP.post('/mcdYes', aMcdVote)
      .then(function(response) {
        this.getMcdVotes();
      }.bind(this));

    },
    fireUpdateBk: function() {
      this.trigger('onChangeYes', this.bkYes);
    },
    fireUpdateMcd: function() {
      //this.trigger('onChangeYes', this.mcdYes);
    }
});

module.exports = VotesStore;
