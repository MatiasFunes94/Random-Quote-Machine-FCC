import React from 'react'
import { Link } from 'react-router-dom'

const Favorites = ({ favorites, onClose }) => {

    return (
        <div>
            <div className="go-back-favorite">
                <Link to="/" className="Link-favorite">
                    <h4>Go back</h4>
                </Link>
            </div>
            <div>
                {favorites.map((ele, id) => (
                    <div key={id} className="favorite-card container">
                        <div className="card mt-4 mb-3">
                            <div className="card-body">
                                <h4 className="card-title">{ele.author}</h4>
                                <p className="card-text">{ele.quote}</p>
                            </div>
                        </div>
                        <div>
                        <button className="btn btn-danger close-buton" onClick={() => onClose(ele.id)}>x</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Favorites