// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggDetails, updatedSearchInput} = props
  const {suggestion} = suggDetails

  const onClickSuggestion = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="list-items">
      <p>{suggestion}</p>
      <button
        type="button"
        className="button-arrow"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
