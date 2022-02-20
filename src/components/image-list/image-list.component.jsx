import React from "react"
import "./image-list.css"

export const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => (
    <img key={id} alt={description} src={urls.regular} />
  ))

  return <div className="image-list">{images}</div>
}
