var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var VotesStore = Reflux.createStore({
    listenables: [Actions],
    getBkVotes: function() {
      HTTP.get('/bkyes')
      .then(function(json){
        this.bkYes = json;
        this.fireUpdateBk();
      }.bind(this));
    },
    getMcdVotes: function() {
      HTTP.get('/mcdyes')
      .then(function(json){
        this.mcdYes = json;
        this.fireUpdateMcd();
      }.bind(this));
    },
    getDomVotes: function() {
      HTTP.get('/domyes')
      .then(function(json){
        this.domYes = json;
        this.fireUpdateDom();
      }.bind(this));
    },
    getPhutVotes: function() {
      HTTP.get('/phutyes')
      .then(function(json){
        this.phutYes = json;
        this.fireUpdatePhut();
      }.bind(this));
    },
    getArbyVotes: function() {
      HTTP.get('/arbyyes')
      .then(function(json){
        this.arbyYes = json;
        this.fireUpdateArby();
      }.bind(this));
    },
    getWendVotes: function() {
      HTTP.get('/wendyes')
      .then(function(json){
        this.wendYes = json;
        this.fireUpdateWend();
      }.bind(this));
    },
    getChicVotes: function() {
      HTTP.get('/chicyes')
      .then(function(json){
        this.chicYes = json;
        this.fireUpdateChic();
      }.bind(this));
    },
    getKfcVotes: function() {
      HTTP.get('/kfcyes')
      .then(function(json){
        this.kfcYes = json;
        this.fireUpdateKfc();
      }.bind(this));
    },
    getSubVotes: function() {
      HTTP.get('/subyes')
      .then(function(json){
        this.subYes = json;
        this.fireUpdateSub();
      }.bind(this));
    },
    getJimVotes: function() {
      HTTP.get('/jimyes')
      .then(function(json){
        this.jimYes = json;
        this.fireUpdateJim();
      }.bind(this));
    },

    bkVote: function() {
      this.getBkVotes();

      if (!this.bkYes) {
        this.bkYes = [];
      };

      HTTP.post('/bkyes')
      .then(function(response) {
        this.getBkVotes();
      }.bind(this));

    },
    mcdVote: function(num) {
      this.getMcdVotes();

      if (!this.mcdYes) {
        this.mcdYes = [];
      };

      HTTP.post('/mcdyes')
      .then(function(response) {
        this.getMcdVotes();
      }.bind(this));

    },
    domVote: function(num) {
      this.getDomVotes();

      if (!this.domYes) {
        this.domYes = [];
      };

      HTTP.post('/domyes')
      .then(function(response) {
        this.getDomVotes();
      }.bind(this));

    },
    phutVote: function(num) {
      this.getPhutVotes();

      if (!this.phutYes) {
        this.phutYes = [];
      };

      HTTP.post('/phutyes')
      .then(function(response) {
        this.getPhutVotes();
      }.bind(this));

    },
    arbyVote: function(num) {
      this.getArbyVotes();

      if (!this.arbyYes) {
        this.arbyYes = [];
      };

      HTTP.post('/arbyyes')
      .then(function(response) {
        this.getArbyVotes();
      }.bind(this));

    },
    wendVote: function(num) {
      this.getWendVotes();

      if (!this.wendYes) {
        this.wendYes = [];
      };

      HTTP.post('/wendyes')
      .then(function(response) {
        this.getWendVotes();
      }.bind(this));

    },
    chicVote: function(num) {
      this.getChicVotes();

      if (!this.chicYes) {
        this.chicYes = [];
      };

      HTTP.post('/chicyes')
      .then(function(response) {
        this.getChicVotes();
      }.bind(this));

    },
    kfcVote: function(num) {
      this.getKfcVotes();

      if (!this.kfcYes) {
        this.kfcYes = [];
      };

      HTTP.post('/kfcyes', aKfcVote)
      .then(function(response) {
        this.getKfcVotes();
      }.bind(this));

    },
    subVote: function(num) {
      this.getSubVotes();

      if (!this.subYes) {
        this.subYes = [];
      };

      HTTP.post('/subyes')
      .then(function(response) {
        this.getSubVotes();
      }.bind(this));

    },
    jimVote: function(num) {
      this.getJimVotes();

      if (!this.jimYes) {
        this.jimYes = [];
      };

      HTTP.post('/jimyes')
      .then(function(response) {
        this.getJimVotes();
      }.bind(this));

    },





    fireUpdateBk: function() {
      this.trigger('onChangeYes', this.bkYes);
    },
    fireUpdateMcd: function() {
      this.trigger('onChangeYes', this.mcdYes);
    },
    fireUpdateDom: function() {
      this.trigger('onChangeYes', this.domYes);
    },
    fireUpdatePhut: function() {
      this.trigger('onChangeYes', this.phutYes);
    },
    fireUpdateArby: function() {
      this.trigger('onChangeYes', this.arbyYes);
    },
    fireUpdateWend: function() {
      this.trigger('onChangeYes', this.wendYes);
    },
    fireUpdateChic: function() {
      this.trigger('onChangeYes', this.chicYes);
    },
    fireUpdateKfc: function() {
      this.trigger('onChangeYes', this.kfcYes);
    },
    fireUpdateSub: function() {
      this.trigger('onChangeYes', this.subYes);
    },
    fireUpdateJim: function() {
      this.trigger('onChangeYes', this.jimYes);
    }
});

module.exports = VotesStore;
