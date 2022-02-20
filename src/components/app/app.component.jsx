import React from "react"
import axios from "axios"
import { SearchBar } from "../search-bar"

export class App extends React.Component {
  async handleSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID _sXPJXHuGY4BF3gPiyja4TByYbUKoSMCYTwtO3tPt6c",
      },
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar passOnSubmit={this.handleSearchSubmit} />
      </div>
    )
  }
}
