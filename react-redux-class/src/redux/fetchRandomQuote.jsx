import { randomQuote } from './actions'

export default function fetchRandomQuote() {
    return function(dispatch) {
    return fetch('http://quotes.stormconsultancy.co.uk/random.json')
      .then(r => r.json())
      .then(data => {
          dispatch(randomQuote(data));
      })
    }
}
