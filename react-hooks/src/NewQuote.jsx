import React from 'react'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';

const NewQuote = ({ randomQuote, quote, author, addFavorite }) => {
    return (
        <div id="new-quote">
            <div >
                <button id="button-icon" type="button" className="btn btn-tw">
                <a id='tweet-quote'  
                    href={`https://twitter.com/intent/tweet/?text=${quote} - ${author}`}>
                    <i id="icon" className="fa fa-twitter"></i></a>
                </button>
            </div>
            <div>
                <button className="btn button-fav-newquote" onClick={() => addFavorite()}>Add Fav</button>
            </div>
            <div>
                <button className="btn button-fav-newquote" onClick={() => randomQuote()}>New quote</button>
            </div>
        </div>
    )
}

export default NewQuote;