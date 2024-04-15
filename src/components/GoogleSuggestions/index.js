// Write your code here
import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = { searchInput: '' }

  updatedSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props

    const searchResultsList = suggestionsList.filter(eachSugg =>
      eachSugg.suggestion.toLowerCase().includes(suggestionsList.toLowerCase())
    )

    return (
      <div className="bg-container">
        <div className="google-container">
          <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" className="g-logo" alt="google logo" />
          <div className="input-container">
            <div className="search-container">
              <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon" className="icon" />
              <input
                type="search"
                className="input-element"
                placeholder="Search Google"
                onChange={this.onChangeInput}
                value={searchInput}
              />
            </div>
            <ul className="filter-items">
              {searchResultsList.map(eachsugg => (
                <SuggestionItem
                  suggDetails={eachsugg}
                  key={eachsugg.id}
                  updatedSearchInput={this.updatedSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
