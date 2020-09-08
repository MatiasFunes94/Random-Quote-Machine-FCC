import React from 'react'
import NewQuote from './NewQuote'

const ShowQuotes = ({quote, author, randomQuote, addFavorite, id }) => {
    return (
        <div className="quote-box">
          <p id="text"><i className="fa fa-quote-left"></i>&nbsp;&nbsp;{quote}</p>
          <h4 id="author">- {author}</h4>
          <h5>{console.log(id)}</h5>
          <NewQuote randomQuote={randomQuote} quote={quote} author={author} addFavorite={addFavorite}/>
        </div>
    )
}

export default ShowQuotes;