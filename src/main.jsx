var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var Actions = require('./reflux/actions.jsx');
var VotesStore = require('./reflux/votes-store.jsx');
var NoStore = require('./reflux/no-store.jsx');
var classNames = require('classnames');




var YesVotes = React.createClass({

    render: function() {
        return (<span>
          {this.props.yes}
          {this.props.no}
          {this.props.key}
          </span>
      );
    }
 });

 var NoVotes = React.createClass({

     render: function() {
         return (<span>
           {this.props.no}
           </span>
       );
     }
  });


var Parent = React.createClass({
      mixins: [
    Reflux.listenTo(VotesStore, 'onChangeYes'),
    Reflux.listenTo(NoStore, 'onChangeNo')
    ],

      getInitialState: function() {
        return {
          voteYes: [],
          voteNo: [],
          hideLeftArrow: true,
          invisible: true,
          showImg1: true,
          showImg2: false,
          showImg3: false,
          showImg4: false,
          showImg5: false
        }
      },

      onChangeYes: function(event, data) {
      this.setState({voteYes: data});
      },

      onChangeNo: function(event, data) {
      this.setState({voteNo: data});
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
        if(this.state.showImg3){
          this.setState({showImg3:false});
          this.setState({showImg4:true});
        }
        if(this.state.showImg4){
          this.setState({showImg4:false});
          this.setState({showImg5:true});
        }
    },

      changeimgLeft: function () {
        if(this.state.showImg5){
          this.setState({showImg5:false});
          this.setState({showImg4:true});
        }
        if(this.state.showImg4){
          this.setState({showImg4:false});
          this.setState({showImg3:true});
        }
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
        Actions.bkVote(num);
        Actions.getMcdNo();
      },

      mcdCall: function () {
        var num = 0;
        Actions.mcdVote(num);
        Actions.getBkNo();
      },

      domCall: function () {
        var num = 0;
        Actions.domVote(num);
        Actions.getPhutNo();
      },

      phutCall: function () {
        var num = 0;
        Actions.phutVote(num);
        Actions.getDomNo();
      },

      arbyCall: function () {
        var num = 0;
        Actions.arbyVote(num);
        Actions.getWendNo();
      },

      wendCall: function () {
        var num = 0;
        Actions.wendVote(num);
        Actions.getArbyNo();
      },

      chicCall: function () {
        var num = 0;
        Actions.chicVote(num);
        Actions.getKfcNo();
      },

      kfcCall: function () {
        var num = 0;
        Actions.kfcVote(num);
        Actions.getChicNo();
      },

      subCall: function () {
        var num = 0;
        Actions.subVote(num);
        Actions.getJimNo();
      },

      jimCall: function () {
        var num = 0;
        Actions.jimVote(num);
        Actions.getSubNo();

      },

      render: function() {

        var id = this.state.voteYes.map(function(item) {
            return <YesVotes key={item.id} yes={item._id} />;
        });

        var no = this.state.voteNo.map(function(item) {
            return <NoVotes key={item.id} no={item.vote} />;
        });

        var yes = this.state.voteYes.map(function(item) {
            return <YesVotes key={item.id} yes={item.vote} />;
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

        var hide4 = classNames({
          'invisible': this.state.invisible,
          'visible': this.state.showImg4,
          'fadeInUp': this.state.showImg4,
          'animated': true,
          'hvr-grow': true
          });

        var hide5 = classNames({
          'invisible': this.state.invisible,
          'visible': this.state.showImg5,
          'fadeInUp': this.state.showImg5,
          'animated': true,
          'hvr-grow': true
          });



      return ( <div>
        <i id="page-right" onClick={this.changeimgRight} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
          <LeftSwipe leftArrow={this.changeimgLeft} showArrow={this.state.hideLeftArrow}/>
        <img className={hide1} onClick={this.bkCall} src="../assets/img/burgerking.png" id="foodleft" alt="Burger King" height="394" width="440"></img>
        <img className={hide1} onClick={this.mcdCall} src="../assets/img/mcdonalds.png" id="foodright" alt="McDonalds" height="394" width="440"></img>
        <img className={hide2} onClick={this.domCall} src="../assets/img/dominos.png" id="foodleft" alt="Dominos" height="394" width="440"></img>
        <img className={hide2} onClick={this.phutCall} src="../assets/img/pizzahut.png" id="foodright" alt="Pizza Hut" height="394" width="440"></img>
        <img className={hide3} onClick={this.arbyCall} src="../assets/img/arbys.png" id="foodleft" alt="Arbys" height="394" width="440"></img>
        <img className={hide3} onClick={this.wendCall} src="../assets/img/wendys.png" id="foodright" alt="Wendys" height="394" width="440"></img>
        <img className={hide4} onClick={this.chicCall} src="../assets/img/chickfila.png" id="foodleft" alt="Chickfila" height="394" width="540"></img>
        <img className={hide4} onClick={this.kfcCall} src="../assets/img/kfc.png" id="foodright" alt="kfc" height="394" width="440"></img>
        <img className={hide5} onClick={this.subCall} src="../assets/img/subway.png" id="foodleft" alt="Subway" height="394" width="600"></img>
        <img className={hide5} onClick={this.jimCall} src="../assets/img/jimmyjohns.png" id="foodright" alt="Jimmy John's" height="394" width="440"></img>
        <h1 className="fadeInUp animated">Which do you prefer??</h1>
        <p className="fadeInUp animated">Click one</p>
        <h2 className="invisible">You chose {id}. {yes} other voters agree with you, {no} others do not.</h2>
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
  </div>, document.getElementById('app'));
