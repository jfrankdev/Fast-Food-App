var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');


var Food1 = React.createClass({

  getInitialState: function() {
    return {
      img: "../assets/img/burgerking.png"
    }
  },

  flip: function () {
    if(this.state.img){
      this.setState({img: "../assets/img/dominos.png"});
    }
  },

  render: function() {
      return (
        <div>
        <i id="page-right" onClick={this.flip} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
        <img className="fadeInUp animated hvr-grow" src={this.state.img} id="foodleft" alt="Burger King" height="394" width="440"></img>
        </div>
    );
  }
});



var Food2 = React.createClass({

  getInitialState: function() {
    return {
      img: "../assets/img/mcdonalds.png"
    }
  },

  flip: function () {
    if(this.state.img){
      this.setState({img: "../assets/img/pizzahut.png"});
    }
  },

  render: function() {
      return (
        <div>
        <i id="page-right" onClick={this.flip} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
        <img className="fadeInUp animated hvr-grow" src={this.state.img} id="foodright" alt="Burger King" height="394" width="440"></img>
        </div>
    );
  }
});




var Static = React.createClass({


    render: function() {
        return ( <div>
          <h1 className="fadeInUp animated">Which do you prefer??</h1>
          <p className="fadeInUp animated">Click one</p>
          <h2>You chose McDonald's. 3 other voters agree with you, 2 others do not.</h2>
          </div>
      );
    }
 });

ReactDOM.render(<div>
  <Static />
  <Food1 />
  <Food2 />
  </div>, document.getElementById('ingredients'));
