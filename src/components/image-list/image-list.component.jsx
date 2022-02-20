import React from "react"

export const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => (
    <img key={id} alt={description} src={urls.regular} />
  ))

  return <div>{images}</div>
}
