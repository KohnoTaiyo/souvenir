import React from 'react'

type Props = {
  url: string
}

const Video = (props: Props) => {
  return(
    <div className="relative w-full h-0 pb-pm overflow-hidden">
      <iframe
        loading="lazy"
        width="560"
        height="365"
        title="movie"
        src={`${props.url}?autoplay=1`}
        className="absolute w-full h-full top-0 left-0">
      </iframe>
    </div>
  )
}
export default Video