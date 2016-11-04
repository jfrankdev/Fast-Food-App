var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var Actions = require('./reflux/actions.jsx');
var IngredientStore = require('./reflux/ingredients-store.jsx');
var classNames = require('classnames');




var Results = React.createClass({


    render: function() {
      console.log('hello this is a test');
        return (<span>
          {this.props.yes}
          {this.props.no}
          {this.props.key}
          </span>
      );
    }
 });


var Parent = React.createClass({
      mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
      getInitialState: function() {
        return {
          img1: "../assets/img/burgerking.png",
          img2: "../assets/img/mcdonalds.png",
          agree: [],
          disagree: [],
          showResults: true
        }

      },

      onChange: function(event, data) {
        this.setState({agree: data});
      },


      changeimg: function () {
        switch (this.state.img1) {
    case "../assets/img/burgerking.png":
    this.setState({ showResults: false });
    this.setState({img1: "../assets/img/dominos.png",
                   img2: "../assets/img/pizzahut.png"
    });
        break;
    case "../assets/img/dominos.png":
    this.setState({img1: "../assets/img/arbys.png",
                   img2: "../assets/img/wendys.png"
    });
        break;
    default:
        console.log('hello');
      };

      },

      changeimgLeft: function () {
        switch (this.state.img1) {
          case "../assets/img/burgerking.png":
              break;
    case "../assets/img/dominos.png":
    this.setState({ showResults: true });
    this.setState({img1: "../assets/img/burgerking.png",
                   img2: "../assets/img/mcdonalds.png"
    });
        break;
    case "../assets/img/arbys.png":
    this.setState({img1: "../assets/img/dominos.png",
                   img2: "../assets/img/pizzahut.png"
    });
        break;

    default:
        console.log('hello');
      };

      },

      bkCall: function (e) {
              switch (this.state.img1) {
        case "../assets/img/burgerking.png":
        var num = 0;
        Actions.postIngredient(num);

        break;

        default:
        console.log('hello this is a test');
        }
      },



      mcdCall: function () {
              switch (this.state.img2) {
        case "../assets/img/mcdonalds.png":
        HTTP.get('/mcdYes')
        .then(function(data){
          console.log('http get is working');
          this.setState({agree: data});
        }.bind(this));

        HTTP.get('/mcdNo')
        .then(function(data){
          console.log('http get is working');
          this.setState({disagree: data});
        }.bind(this));
        break;

        default:
        console.log('hello this is a test');
        }
      },

      render: function() {

        var id = this.state.agree.map(function(item) {
            return <Results key={item.id} yes={item.id} />;
        });

        var no = this.state.disagree.map(function(item) {
            return <Results key={item.id} no={item.vote} />;
        });

        var yes = this.state.agree.map(function(item) {
            return <Results key={item.id} yes={item.vote} />;
        });

      return ( <div>
        <i id="page-right" onClick={this.changeimg} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
          <LeftSwipe myClick={this.changeimgLeft} showArrow={this.state.showResults}/>
        <img className="fadeInUp animated hvr-grow" onClick={this.bkCall} src={this.state.img1} id="foodleft" alt="Burger King" height="394" width="440"></img>
        <img className="fadeInUp animated hvr-grow" onClick={this.mcdCall} src={this.state.img2} id="foodright" alt="Burger King" height="394" width="440"></img>
        <h1 className="fadeInUp animated">Which do you prefer??</h1>
        <p className="fadeInUp animated">Click one</p>
        <h2>You chose {id}. {yes} other voters agree with you, {no} others do not.</h2>
              </div>
      )

    }

});

var LeftSwipe = React.createClass({
    render: function() {
      var swipeClasses = classNames({
        'invisible': this.props.showArrow,
        'fa': true,
        'fa-angle-double-left': true,
        'fa-5x': true,
        'hvr-grow': true
        });
        return (
<i id="page-left" onClick={this.props.myClick} className={swipeClasses}></i>
        );
    }
});

ReactDOM.render(<div>
  <Parent />

  </div>, document.getElementById('ingredients'));
