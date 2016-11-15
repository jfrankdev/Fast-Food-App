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
      HTTP.get('/mcdYes')
      .then(function(json){
        this.mcdYes = json;
        this.fireUpdateMcd();
      }.bind(this));
    },
    getDomVotes: function() {
      HTTP.get('/domYes')
      .then(function(json){
        this.domYes = json;
        this.fireUpdateDom();
      }.bind(this));
    },
    getPhutVotes: function() {
      HTTP.get('/phutYes')
      .then(function(json){
        this.phutYes = json;
        this.fireUpdatePhut();
      }.bind(this));
    },
    getArbyVotes: function() {
      HTTP.get('/arbyYes')
      .then(function(json){
        this.arbyYes = json;
        this.fireUpdateArby();
      }.bind(this));
    },
    getWendVotes: function() {
      HTTP.get('/wendYes')
      .then(function(json){
        this.wendYes = json;
        this.fireUpdateWend();
      }.bind(this));
    },
    getChicVotes: function() {
      HTTP.get('/chicYes')
      .then(function(json){
        this.chicYes = json;
        this.fireUpdateChic();
      }.bind(this));
    },
    getKfcVotes: function() {
      HTTP.get('/kfcYes')
      .then(function(json){
        this.kfcYes = json;
        this.fireUpdateKfc();
      }.bind(this));
    },
    getSubVotes: function() {
      HTTP.get('/subYes')
      .then(function(json){
        this.subYes = json;
        this.fireUpdateSub();
      }.bind(this));
    },
    getJimVotes: function() {
      HTTP.get('/jimYes')
      .then(function(json){
        this.jimYes = json;
        this.fireUpdateJim();
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
    domVote: function(num) {
      if (!this.domYes) {
        this.domYes = [];
      };

      var aDomVote = {
        "id": "",
        "vote": num
      };

      this.domYes.push(aDomVote);
      this.fireUpdateDom();

      HTTP.post('/domYes', aDomVote)
      .then(function(response) {
        this.getDomVotes();
      }.bind(this));

    },
    phutVote: function(num) {
      if (!this.phutYes) {
        this.phutYes = [];
      };

      var aPhutVote = {
        "id": "",
        "vote": num
      };

      this.phutYes.push(aPhutVote);
      this.fireUpdatePhut();

      HTTP.post('/phutYes', aPhutVote)
      .then(function(response) {
        this.getPhutVotes();
      }.bind(this));

    },
    arbyVote: function(num) {
      if (!this.arbyYes) {
        this.arbyYes = [];
      };

      var aArbyVote = {
        "id": "",
        "vote": num
      };

      this.arbyYes.push(aArbyVote);
      this.fireUpdateArby();

      HTTP.post('/arbyYes', aArbyVote)
      .then(function(response) {
        this.getArbyVotes();
      }.bind(this));

    },
    wendVote: function(num) {
      if (!this.wendYes) {
        this.wendYes = [];
      };

      var aWendVote = {
        "id": "",
        "vote": num
      };

      this.wendYes.push(aWendVote);
      this.fireUpdateWend();

      HTTP.post('/wendYes', aWendVote)
      .then(function(response) {
        this.getWendVotes();
      }.bind(this));

    },
    chicVote: function(num) {
      if (!this.chicYes) {
        this.chicYes = [];
      };

      var aChicVote = {
        "id": "",
        "vote": num
      };

      this.chicYes.push(aChicVote);
      this.fireUpdateChic();

      HTTP.post('/chicYes', aChicVote)
      .then(function(response) {
        this.getChicVotes();
      }.bind(this));

    },
    kfcVote: function(num) {
      if (!this.kfcYes) {
        this.kfcYes = [];
      };

      var aKfcVote = {
        "id": "",
        "vote": num
      };

      this.kfcYes.push(aKfcVote);
      this.fireUpdateKfc();

      HTTP.post('/kfcYes', aKfcVote)
      .then(function(response) {
        this.getKfcVotes();
      }.bind(this));

    },
    subVote: function(num) {
      if (!this.subYes) {
        this.subYes = [];
      };

      var aSubVote = {
        "id": "",
        "vote": num
      };

      this.subYes.push(aSubVote);
      this.fireUpdateSub();

      HTTP.post('/subYes', aSubVote)
      .then(function(response) {
        this.getSubVotes();
      }.bind(this));

    },
    jimVote: function(num) {
      if (!this.jimYes) {
        this.jimYes = [];
      };

      var aJimVote = {
        "id": "",
        "vote": num
      };

      this.jimYes.push(aJimVote);
      this.fireUpdateJim();

      HTTP.post('/jimYes', aJimVote)
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
