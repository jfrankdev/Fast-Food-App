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
          agree: [],
          disagree: [],
          hideLeftArrow: true,
          invisible: true,
          showImg1: true,
          showImg2: false,
          showImg3: false
        }

      },

      onChange: function(event, data) {
        this.setState({agree: data});
      },


      changeimgRight: function () {
        this.setState({ hideLeftArrow: false });
          if(this.state.showImg1){
            this.setState({showImg1:false});
            this.setState({showImg2:true});
          }
          if(this.state.showImg2){
            this.setState({showImg2:false});
            this.setState({showImg3:true});
          }
      },

      changeimgLeft: function () {
        if(this.state.showImg3){
          this.setState({showImg3:false});
          this.setState({showImg2:true});
        }
        if(this.state.showImg2){
          this.setState({ hideLeftArrow: true });
          this.setState({showImg2:false});
          this.setState({showImg1:true});
        }
    },

      bkCall: function (e) {
        var num = 0;
        Actions.postIngredient(num);

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


        var hide1 = classNames({
          'invisible': this.state.invisible,
          'visible': this.state.showImg1,
          'fadeInUp': this.state.showImg1,
          'animated': true,
          'hvr-grow': true
          });

        var hide2 = classNames({
          'invisible': this.state.invisible,
          'visible': this.state.showImg2,
          'fadeInUp': this.state.showImg2,
          'animated': true,
          'hvr-grow': true
          });

        var hide3 = classNames({
          'invisible': this.state.invisible,
          'visible': this.state.showImg3,
          'fadeInUp': this.state.showImg3,
          'animated': true,
          'hvr-grow': true
          });


      return ( <div>
        <i id="page-right" onClick={this.changeimgRight} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
          <LeftSwipe leftArrow={this.changeimgLeft} showArrow={this.state.hideLeftArrow}/>
        <img className={hide1} onClick={this.bkCall} src="../assets/img/burgerking.png" id="foodleft" alt="Burger King" height="394" width="440"></img>
        <img className={hide1} onClick={this.mcdCall} src="../assets/img/mcdonalds.png" id="foodright" alt="McDonalds" height="394" width="440"></img>
        <img className={hide2} onClick={this.bkCall} src="../assets/img/dominos.png" id="foodleft" alt="Dominos" height="394" width="440"></img>
        <img className={hide2} onClick={this.mcdCall} src="../assets/img/pizzahut.png" id="foodright" alt="Pizza Hut" height="394" width="440"></img>
        <img className={hide3} onClick={this.bkCall} src="../assets/img/arbys.png" id="foodleft" alt="Arbys" height="394" width="440"></img>
        <img className={hide3} onClick={this.mcdCall} src="../assets/img/wendys.png" id="foodright" alt="Wendys" height="394" width="440"></img>
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
<i id="page-left" onClick={this.props.leftArrow} className={swipeClasses}></i>
        );
    }
});

ReactDOM.render(<div>
  <Parent />

  </div>, document.getElementById('ingredients'));
