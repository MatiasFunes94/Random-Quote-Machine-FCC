import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Favorites from './Favorites'
import ShowQuotes from './ShowQuotes'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  

  this.state = {
    quote: "",
    author: "",
    id: 0,
    favorites: [],
  }

  this.randomQuote = this.randomQuote.bind(this);
  this.addFavorite = this.addFavorite.bind(this);
  this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    this.randomQuote();
  }

  randomQuote() {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
      .then(r => r.json())
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author,
          id: data.id
        })
      });
  }

  addFavorite() {
    if(!this.state.favorites.some(element => element.id === this.state.id)){
      this.setState({
        favorites: [...this.state.favorites.concat([{author: this.state.author, quote: this.state.quote, id: this.state.id}])]
      })
    } else {
      alert("Quote has already been added!");
    }
  }

  onClose(id) {
    this.setState({
    favorites: this.state.favorites.filter(element => element.id !== id)
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <div id="container-box">
          <Route
            exact path="/"
            render={() => <ShowQuotes quote={this.state.quote} author={this.state.author}
            randomQuote={this.randomQuote} addFavorite={this.addFavorite} />}
          />
          </div>
          <div>
            <Route
              exact path="/favorites"
              render={() => <Favorites favorites={this.state.favorites} onClose={this.onClose}/>}
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

