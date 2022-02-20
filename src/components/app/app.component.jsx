import React from "react"
import { SearchBar } from "../search-bar"

export class App extends React.Component {
  handleSearchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar passOnSubmit={this.handleSearchSubmit} />
      </div>
    )
  }
}
