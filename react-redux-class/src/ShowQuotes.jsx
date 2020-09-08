import React from 'react'
import NewQuote from './NewQuote'
import { connect } from 'react-redux'

class ShowQuotes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="quote-box">
                <p id="text"><i className="fa fa-quote-left"></i>&nbsp;&nbsp;{this.props.quote}</p>
                <h4 id="author">- {this.props.author}</h4>
                <NewQuote />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quote,
        author: state.author
    }
}

export default connect(mapStateToProps, null)(ShowQuotes);
