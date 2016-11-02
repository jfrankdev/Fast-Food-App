var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
    listenables: [Actions],
    getIngredients: function() {
      HTTP.get('/bkYes')
      .then(function(data){
        this.agree = data;
        this.fireUpdate();
      }.bind(this));
    },
    postIngredient: function(text) {

      if (!this.newText) {
        this.newText = [];
      }

      var ingredient = {
        "text": text,
        "id": Math.floor(Date.now() / 1000) + text
      };

      this.newText.push(text);
      console.log('post test');
      this.fireUpdate();

      HTTP.post('/ingredients', ingredient)
      .then(function(response) {
        this.getIngredients();
      }.bind(this));

    },
    fireUpdate: function() {
      this.trigger('change', this.agree);//change to this.newText for post
    }
});

module.exports = IngredientStore;
