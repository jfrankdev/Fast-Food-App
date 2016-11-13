var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var NoStore = Reflux.createStore({
    listenables: [Actions],
    getMcdNo: function() {
      HTTP.get('/mcdYes')
      .then(function(json){
        this.mcdNo = json;
        this.fireUpdateBkNo();
      }.bind(this));
    },
    getBkNo: function() {
      HTTP.get('/bkYes')
      .then(function(json){
        this.bkNo = json;
        this.fireUpdateMcdNo();
      }.bind(this));
    },
    getPhutNo: function() {
      HTTP.get('/phutYes')
      .then(function(json){
        this.phutNo = json;
        this.fireUpdatePhutNo();
      }.bind(this));
    },
    getDomNo: function() {
      HTTP.get('/domYes')
      .then(function(json){
        this.domNo = json;
        this.fireUpdateDomNo();
      }.bind(this));
    },
    getWendNo: function() {
      HTTP.get('/wendYes')
      .then(function(json){
        this.wendNo = json;
        this.fireUpdateWendNo();
      }.bind(this));
    },
    getArbyNo: function() {
      HTTP.get('/arbyYes')
      .then(function(json){
        this.arbyNo = json;
        this.fireUpdateArbyNo();
      }.bind(this));
    },
    fireUpdateBkNo: function() {
      this.trigger('onChangeNo', this.mcdNo);
    },
    fireUpdateMcdNo: function() {
      this.trigger('onChangeNo', this.bkNo);
    },
    fireUpdatePhutNo: function() {
      this.trigger('onChangeNo', this.phutNo);
    },
    fireUpdateDomNo: function() {
      this.trigger('onChangeNo', this.domNo);
    },
    fireUpdateWendNo: function() {
      this.trigger('onChangeNo', this.wendNo);
    },
    fireUpdateArbyNo: function() {
      this.trigger('onChangeNo', this.arbyNo);
    }
});

module.exports = NoStore;
