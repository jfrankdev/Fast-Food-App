var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');


var Food = React.createClass({

  getInitialState(): function() {
    

  },

  render: function() {
      return ( <div>
        <img className="fadeInUp animated hvr-grow" id={this.props.id} src={this.props.src} alt={this.props.alt} height="394" width="440"></img>
        </div>
    );
  }
});


var Static = React.createClass({

    flip: function () {
      alert('flipping');
    },

    render: function() {
        return ( <div>
          <h1 className="fadeInUp animated">Which do you prefer??</h1>
          <p className="fadeInUp animated">Click one</p>
          <i id="page-right" onClick={this.flip} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
          <h2>You chose McDonald's. 3 other voters agree with you, 2 others do not.</h2>
          </div>
      );
    }
 });

ReactDOM.render(<div>
  <Static />
  <Food id="foodleft" src="../assets/img/burgerking.png" alt="Burger King" />
  <Food id="foodright" src="../assets/img/mcdonalds.png" alt="McDonalds" />
  <Food id="foodleft" src="../assets/img/dominos.png" alt="Dominos" />
  <Food id="foodright" src="../assets/img/pizzahut.png" alt="Pizza Hut" />
  </div>, document.getElementById('ingredients'));
