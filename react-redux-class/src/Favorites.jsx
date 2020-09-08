import React from 'react'
import { Link } from 'react-router-dom'
import { onClose } from './redux/actions'
import { connect } from 'react-redux'

class Favorites extends React.Component {
    constructor(props) {
        super(props)

    }
    render () {
        return (
            <div>
                <div className="go-back-favorite">
                    <Link to="/" className="Link-favorite">
                        <h4>Go back</h4>
                    </Link>
                </div>
                <div>
                    {this.props.favorites && this.props.favorites.map((ele, id) => (
                        <div key={id} className="favorite-card container">
                            <div className="card mt-4 mb-3">
                                <div className="card-body">
                                    <h4 className="card-title">{ele.author}</h4>
                                    <p className="card-text">{ele.quote}</p>
                                </div>
                            </div>
                            <div>
                            <button className="btn btn-danger close-buton" onClick={() => this.props.onClose(ele.id)}>x</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClose: id => dispatch(onClose(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);