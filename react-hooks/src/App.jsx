import React, { useState, useEffect } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Favorites from './Favorites'
import ShowQuotes from './ShowQuotes'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {

  const [userRequest, setUserRequest] = useState({
    quote: "",
    author: "",
    id: 0
  });

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    randomQuote();
  }, [])

  const randomQuote = () => {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
      .then(r => r.json())
      .then(data => {
        setUserRequest({
          quote: data.quote,
          author: data.author,
          id: data.id
        });
      });
  }

  const { quote, author, id } = userRequest;

  const addFavorite = () => {
    if(!favorites.some(element => element.id === id)){
      setFavorites(oldFavorites => oldFavorites.concat([{author: author, quote: quote, id: id}]));
    } else {
      alert("quote has already been added!")
    }
  }

  const onClose = (id) => {
    setFavorites(oldFavorites => oldFavorites.filter(element => element.id !== id));
  }

  return (
    <div className="wrapper">
      <div>
        <div id="container-box">
        <Route
          exact path="/"
          render={() => <ShowQuotes quote={quote} author={author}
          randomQuote={randomQuote} addFavorite={addFavorite} onClose={onClose}/>}
        />
        </div>
        <div>
          <Route
            exact path="/favorites"
            render={() => <Favorites favorites={favorites} onClose={onClose}/>}
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

export default App;
