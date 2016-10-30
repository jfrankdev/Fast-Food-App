var React = require('react');
var ReactDOM = require('react-dom');
//var List = require('./components/List.jsx');
var HTTP = require('./services/httpservice');





var Results = React.createClass({


    render: function() {
      console.log('yo yo yo yoooo');
        return (<span>
          {this.props.ingredient}
          </span>
      );
    }
 });


var Parent = React.createClass({


      getInitialState: function() {
        return {
          img1: "../assets/img/burgerking.png",
          img2: "../assets/img/mcdonalds.png",
          ingredients: []
        }

      },

      componentWillMount: function() {
        HTTP.get('/ingredients')
        .then(function(data){
          console.log('http get is working');
          this.setState({ingredients: data});
        }.bind(this));
      },


      flip: function () {
        if(this.state.img1){
          this.setState({img1: "../assets/img/dominos.png",
                         img2: "../assets/img/pizzahut.png"
          });
        }
      },



      render: function() {

        var listItems = this.state.ingredients.map(function(item) {
            return <Results key={item.id} ingredient={item.text} />;
        });

      return ( <div>
        <i id="page-right" onClick={this.flip} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
        <img className="fadeInUp animated hvr-grow" src={this.state.img1} id="foodleft" alt="Burger King" height="394" width="440"></img>
        <img className="fadeInUp animated hvr-grow" src={this.state.img2} id="foodright" alt="Burger King" height="394" width="440"></img>
        <h1 className="fadeInUp animated">Which do you prefer??</h1>
        <p className="fadeInUp animated">Click one</p>
        <h2>You chose {listItems}. 3 other voters agree with you, 2 others do not.</h2>
              </div>
      )

    }

});



ReactDOM.render(<div>
  <Parent />

  </div>, document.getElementById('ingredients'));
