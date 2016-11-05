var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var NoStore = Reflux.createStore({
    listenables: [Actions],
    getNoVote: function() {
      HTTP.get('/mcdYes')
      .then(function(json){
        this.mcdNo = json;
        this.fireUpdateBkNo();
      }.bind(this));
    },

    fireUpdateBkNo: function() {
      this.trigger('onChangeNo', this.mcdNo);
    }
});

module.exports = NoStore;
