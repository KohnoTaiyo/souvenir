import * as React from 'react'

const ContentsVideo = () => (
  <section id="video" className="bg-gray-50 font-light min-h-screen sm:min-h-0">
    <div className="md:wrap wrap-sp lg:pl-80">
      <h2 className="title text-gray-350">Video</h2>
      <div className="relative w-full h-0 pb-pm overflow-hidden">
        <iframe
          width="560"
          height="365"
          src="https://www.youtube.com/embed/aVtIfZG2a60?rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture"
          className="absolute w-full h-full top-0 left-0"></iframe>
      </div>
    </div>
  </section>
)
export default ContentsVideo
