import React from "react"
import unsplash from "../../api/unsplash"
import { SearchBar } from "../search-bar"
import { ImageList } from "../image-list"

export class App extends React.Component {
  state = { images: [] }

  handleSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar passOnSubmit={this.handleSearchSubmit} />
        <ImageList />
      </div>
    )
  }
}
