import React, { useEffect, useState } from 'react'
import S from '../../../public/animattion_logo/s.svg'
import O from '../../../public/animattion_logo/o.svg'
import UV from '../../../public/animattion_logo/uv.svg'
import E from '../../../public/animattion_logo/e.svg'
import N from '../../../public/animattion_logo/n.svg'
import I from '../../../public/animattion_logo/i.svg'
import Itop from '../../../public/animattion_logo/i_top.svg'
import R from '../../../public/animattion_logo/r.svg'

const LoadAnimation = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((pre) => pre + 1)
    }, 50)
    window.onload = () => {
      setInterval(() => clearInterval(timer), 10000)
    }
  }, [])

  return (
    <div className="relative w-60 h-60">
      {count > 10 ? <S className="absolute top-0 left-0" /> : ''}
      {count > 25 ? <O className="absolute top-ot left-ol" /> : ''}
      {count > 35 ? <UV className="absolute top-uvt left-uvl" /> : ''}
      {count > 50 ? <E className="absolute top-et left-el" /> : ''}
      {count > 60 ? <N className="absolute top-nt left-nl" /> : ''}
      {count > 68 ? <I className="absolute top-it left-il" /> : ''}
      {count > 71 ? <Itop className="absolute top-itt left-itl" /> : ''}
      {count > 74 ? <R className="absolute top-rt left-rl" /> : ''}
    </div>
  )
}
export default LoadAnimation
