import React from 'react'

type Props = {
  url: string
}

const Video = (props: Props) => {
  return(
    <iframe
      loading="lazy"
      width="560"
      height="365"
      title="movie"
      src={props.url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture"
      className="absolute w-full h-full top-0 left-0">
    </iframe>
  )
}
export default Video