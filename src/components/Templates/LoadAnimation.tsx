import React from 'react'
import S from '../../../public/animattion_logo/s_ani.svg'
import O from '../../../public/animattion_logo/o_ani.svg'
import UV from '../../../public/animattion_logo/uv_ani.svg'
import E from '../../../public/animattion_logo/e_ani.svg'
import N from '../../../public/animattion_logo/n_ani.svg'
import I from '../../../public/animattion_logo/i_ani.svg'
import Itop from '../../../public/animattion_logo/i_top_ani.svg'
import R from '../../../public/animattion_logo/r_ani.svg'

const LoadAnimation = () => (
  <div className="relative w-60 h-44">
    <S className="absolute top-0 left-0" />
    <O className="absolute top-ot left-ol" />
    <UV className="absolute top-uvt left-uvl" />
    <E className="absolute top-et left-el" />
    <N className="absolute top-nt left-nl" />
    <I className="absolute top-it left-il" />
    <Itop className="absolute top-itt left-itl" />
    <R className="absolute top-rt left-rl" />
  </div>
)
export default LoadAnimation
