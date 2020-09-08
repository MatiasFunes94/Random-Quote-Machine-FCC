import React from 'react'
import NewQuote from './NewQuote'


export default class ShowQuotes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="quote-box">
                <p id="text"><i className="fa fa-quote-left"></i>&nbsp;&nbsp;{this.props.quote}</p>
                <h4 id="author">- {this.props.author}</h4>
                <NewQuote randomQuote={this.props.randomQuote} quote={this.props.quote} 
                author={this.props.author} addFavorite={this.props.addFavorite} />
            </div>
        )
    }
}

