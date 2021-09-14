import * as React from 'react'
import Link from 'next/link'
import Music from '../../../public/music.svg'
import Twitter from '../../../public/twitter.svg'
import Youtube from '../../../public/youtube.svg'
import Instagram from '../../../public/instagram_icon.svg'

type Color = {
  color: string
}

const Icons = (props: Color) => (
  <div className="flex justify-between">
    <Link href="https://twitter.com/Souvenircb">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-${props.color} fill-current`}>
        <Twitter className="w-7 h-7 duration-150" />
      </a>
    </Link>
    <Link href="https://linkcloud.mu/13e2b5ef">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-${props.color} fill-current`}>
        <Music className="w-7 h-7 duration-150" />
      </a>
    </Link>
    <Link href="https://youtube.com/channel/UCABvNkuhE_xZ0q30GVviahA">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-${props.color} fill-current`}>
        <Youtube className="w-7 h-7 duration-150 -mr-1" />
      </a>
    </Link>
    <Link href="https://www.instagram.com/souvenir_inst/">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-${props.color} fill-current`}>
        <Instagram className="w-8 h-8 duration-150 -mr-1" />
      </a>
    </Link>
  </div>
)
export default Icons
