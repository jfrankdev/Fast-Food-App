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
    getKfcNo: function() {
      HTTP.get('/kfcYes')
      .then(function(json){
        this.kfcNo = json;
        this.fireUpdateKfcNo();
      }.bind(this));
    },
    getChicNo: function() {
      HTTP.get('/chicYes')
      .then(function(json){
        this.chicNo = json;
        this.fireUpdateChicNo();
      }.bind(this));
    },
    getSubNo: function() {
      HTTP.get('/subYes')
      .then(function(json){
        this.subNo = json;
        this.fireUpdateSubNo();
      }.bind(this));
    },
    getJimNo: function() {
      HTTP.get('/jimYes')
      .then(function(json){
        this.jimNo = json;
        this.fireUpdateJimNo();
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
    },
    fireUpdateKfcNo: function() {
      this.trigger('onChangeNo', this.kfcNo);
    },
    fireUpdateChicNo: function() {
      this.trigger('onChangeNo', this.chicNo);
    },
    fireUpdateSubNo: function() {
      this.trigger('onChangeNo', this.subNo);
    },
    fireUpdateJimNo: function() {
      this.trigger('onChangeNo', this.jimNo);
    }
});

module.exports = NoStore;
