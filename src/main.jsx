var React = require('react');
var ReactDOM = require('react-dom');
//var List = require('./components/List.jsx');
var HTTP = require('./services/httpservice');





var Results = React.createClass({


    render: function() {
      console.log('yo yo yo yoooo');
        return (<span>
          {this.props.yes}
          {this.props.no}
          {this.props.key}
          </span>
      );
    }
 });


var Parent = React.createClass({


      getInitialState: function() {
        return {
          img1: "../assets/img/burgerking.png",
          img2: "../assets/img/mcdonalds.png",
          img3: "",
          img4: "",
          agree: [],
          disagree: []
        }

      },

      changeimg: function () {
        switch (this.state.img1) {
    case "../assets/img/burgerking.png":
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
}
      },

      bkCall: function () {
              switch (this.state.img1) {
        case "../assets/img/burgerking.png":
        HTTP.get('/bkYes')
        .then(function(data){
          console.log('http get is working');
          this.setState({agree: data});
        }.bind(this));

        HTTP.get('/bkNo')
        .then(function(data){
          console.log('http get is working');
          this.setState({disagree: data});
        }.bind(this));
        break;
        case "../assets/img/dominos.png":
        HTTP.get('/domYes')
        .then(function(data){
          console.log('http get is working');
          this.setState({agree: data});
        }.bind(this));

        HTTP.get('/domNo')
        .then(function(data){
          console.log('http get is working');
          this.setState({disagree: data});
        }.bind(this));
        break;

        default:
        console.log('hello');
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
        console.log('hello');
        }
      },



      render: function() {

        var id = this.state.agree.map(function(item) {
            return <Results key={item.id} yes={item.id} />;
        });

        var no = this.state.disagree.map(function(item) {
            return <Results key={item.id} no={item.text} />;
        });

        var yes = this.state.agree.map(function(item) {
            return <Results key={item.id} yes={item.text} />;
        });

      return ( <div>
        <i id="page-right" onClick={this.changeimg} className="fa fa-angle-double-right fa-5x hvr-grow"></i>
        <img className="fadeInUp animated hvr-grow" onClick={this.bkCall} src={this.state.img1} id="foodleft" alt="Burger King" height="394" width="440"></img>
        <img className="fadeInUp animated hvr-grow" onClick={this.mcdCall} src={this.state.img2} id="foodright" alt="Burger King" height="394" width="440"></img>
        <h1 className="fadeInUp animated">Which do you prefer??</h1>
        <p className="fadeInUp animated">Click one</p>
        <h2>You chose {id}. {yes} other voters agree with you, {no} others do not.</h2>
              </div>
      )

    }

});



ReactDOM.render(<div>
  <Parent />

  </div>, document.getElementById('ingredients'));
