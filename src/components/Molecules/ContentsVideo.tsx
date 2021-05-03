import * as React from 'react'

const ContentsVideo = () => (
  <section
    id="video"
    className="bg-gray-50 font-light min-h-video flex items-center justify-center relative lg:pl-60">
    <h2 className="xl:wrap-big title text-gray-350 lg:text-left lg:text-6xl absolute top-10 left-0 right-0 m-auto lg:top-20 lg:left-80 xl:top-0 xl:left-60">
      Video
    </h2>
    <div className="lg:mt-32 w-full h-full">
      <div className="xl:wrap-big md:wrap wrap-sp">
        <div className="relative w-full h-0 pb-pm overflow-hidden">
          <iframe
            loading="lazy"
            width="560"
            height="365"
            title="movie"
            src="https://www.youtube.com/embed/aVtIfZG2a60?rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture"
            className="absolute w-full h-full top-0 left-0"></iframe>
        </div>
      </div>
    </div>
  </section>
)
export default ContentsVideo
