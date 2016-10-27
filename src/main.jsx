var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');




var Parent = React.createClass({


      getInitialState: function() {
        return {
          img1: "../assets/img/burgerking.png",
          img2: "../assets/img/mcdonalds.png"
        }
      },

      flip: function () {
        if(this.state.img1){
          this.setState({img1: "../assets/img/dominos.png",
                         img2: "../assets/img/pizzahut.png"
          });
        }
      },



      render: function() {
      return ( <div>
        <i id="page-right" onClick={this.flip} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
        <img className="fadeInUp animated hvr-grow" src={this.state.img1} id="foodleft" alt="Burger King" height="394" width="440"></img>
        <img className="fadeInUp animated hvr-grow" src={this.state.img2} id="foodright" alt="Burger King" height="394" width="440"></img>
              </div>
      )

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
  <Parent />
  </div>, document.getElementById('ingredients'));
