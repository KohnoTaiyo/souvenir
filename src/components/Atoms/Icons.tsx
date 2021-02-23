import * as React from 'react'
import Link from 'next/link'
import Music from '../../../public/music.svg'
import Twitter from '../../../public/Twitter.svg'
import Youtube from '../../../public/Youtube.svg'

type Color = {
  color: string
}

const Icons = (props: Color) => (
  <div className="flex justify-between">
    <Link href="https://twitter.com/Souvenircb">
      <a target="_blank" className={`text-gray-${props.color} fill-current`}>
        <Twitter className="w-7 h-7 duration-150" />
      </a>
    </Link>
    <Link href="https://www.tunecore.co.jp/artists/Souvenir">
      <a target="_blank" className={`text-gray-${props.color} fill-current`}>
        <Music className="w-7 h-7 duration-150" />
      </a>
    </Link>
    <Link href="https://youtube.com/channel/UCABvNkuhE_xZ0q30GVviahA">
      <a target="_blank" className={`text-gray-${props.color} fill-current`}>
        <Youtube className="w-7 h-7 duration-150" />
      </a>
    </Link>
  </div>
)
export default Icons
