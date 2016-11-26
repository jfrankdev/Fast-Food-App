var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var NoStore = Reflux.createStore({
    listenables: [Actions],
    getMcdNo: function() {
      HTTP.get('/mcdyes')
      .then(function(json){
        this.mcdNo = json;
        this.fireUpdateBkNo();
      }.bind(this));
    },
    getBkNo: function() {
      HTTP.get('/bkyes')
      .then(function(json){
        this.bkNo = json;
        this.fireUpdateMcdNo();
      }.bind(this));
    },
    getPhutNo: function() {
      HTTP.get('/phutyes')
      .then(function(json){
        this.phutNo = json;
        this.fireUpdatePhutNo();
      }.bind(this));
    },
    getDomNo: function() {
      HTTP.get('/domyes')
      .then(function(json){
        this.domNo = json;
        this.fireUpdateDomNo();
      }.bind(this));
    },
    getWendNo: function() {
      HTTP.get('/wendyes')
      .then(function(json){
        this.wendNo = json;
        this.fireUpdateWendNo();
      }.bind(this));
    },
    getArbyNo: function() {
      HTTP.get('/arbyyes')
      .then(function(json){
        this.arbyNo = json;
        this.fireUpdateArbyNo();
      }.bind(this));
    },
    getKfcNo: function() {
      HTTP.get('/kfcyes')
      .then(function(json){
        this.kfcNo = json;
        this.fireUpdateKfcNo();
      }.bind(this));
    },
    getChicNo: function() {
      HTTP.get('/chicyes')
      .then(function(json){
        this.chicNo = json;
        this.fireUpdateChicNo();
      }.bind(this));
    },
    getSubNo: function() {
      HTTP.get('/subyes')
      .then(function(json){
        this.subNo = json;
        this.fireUpdateSubNo();
      }.bind(this));
    },
    getJimNo: function() {
      HTTP.get('/jimyes')
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
