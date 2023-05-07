import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

export default class MainContainer extends Component {
  state = {
    searchInput: '',
    charsList: [],
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickedAdd = event => {
    event.preventDefault()
    const {searchInput, charsList} = this.state

    if (searchInput !== '') {
      const newObject = {
        id: uuidv4(),
        value: searchInput,
      }

      this.setState({
        charsList: [...charsList, newObject],
        searchInput: '',
      })
    }
  }

  render() {
    const {charsList, searchInput} = this.state
    console.log(charsList)

    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="h-1">Count the characters like a Boss..</h1>

          {charsList.length === 0 ? (
            <img
              className="image"
              alt="no user inputs"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            />
          ) : (
            <ul className="un-ordered-list">
              {charsList.map(obj => (
                <li className="list-item" key={obj.id}>
                  <p>
                    {obj.value}: {obj.value.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="second-container">
          <h1 className="h-2">Character Counter</h1>
          <form onSubmit={this.onClickedAdd} className="input-button-container">
            <input
              onChange={this.onChangeInput}
              value={searchInput}
              placeholder="Enter the Characters here"
              className="input-element"
              type="text"
            />
            <button className="button-style" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
