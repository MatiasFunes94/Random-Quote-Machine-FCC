import React from 'react'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';


export default class NewQuote extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div id="new-quote">
                <div >
                    <button id="button-icon" type="button" className="btn btn-tw">
                    <a id='tweet-quote'  
                        href={`https://twitter.com/intent/tweet/?text=${this.props.quote} - ${this.props.author}`}>
                        <i id="icon" className="fa fa-twitter"></i></a>
                    </button>
                </div>
                <div>
                    <button className="btn button-fav-newquote" onClick={() => this.props.addFavorite()}>Add Fav</button>
                </div>
                <div>
                    <button className="btn button-fav-newquote" onClick={() => this.props.randomQuote()}>New quote</button>
                </div>
            </div>
        )
    }
}

