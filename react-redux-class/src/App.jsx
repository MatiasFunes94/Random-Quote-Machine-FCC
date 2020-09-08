import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Favorites from './Favorites'
import ShowQuotes from './ShowQuotes'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import fetchRandomQuote from './redux/fetchRandomQuote'
import { bindActionCreators } from 'redux';

class App extends React.Component {
  
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { randomQuote } = this.props
    randomQuote();
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <div id="container-box">
          <Route
            exact path="/"
            component={ShowQuotes}
          />
          </div>
          <div>
            <Route
              exact path="/favorites"
              component={Favorites}
            />
          </div>
        </div>
        <div className="favorite-quotes">
          <Link to="/favorites" className="Link">
            <h4>My Favorites Quotes</h4>
          </Link>
        </div>
        <div className="mati">
          <h5>by Mati</h5>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  randomQuote: fetchRandomQuote
}, dispatch)


export default connect(null, mapDispatchToProps)(App);