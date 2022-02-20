import React from "react"

export const ImageList = (props) => {
  const images = props.images.map((image) => <img src={image.urls.regular} />)

  console.log(props)
  return <div>{images}</div>
}
