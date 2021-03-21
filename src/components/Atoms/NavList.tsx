import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Hover = {
  hover: string
  color: string
  clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const NavList = (props: Hover) => {
  const Routes = ['Top', 'Live', 'Video', 'About', 'Contact']
  const router = useRouter()
  return (
    <>
      {Routes.map((val) => (
        <li key={val}>
          {router.pathname === '/' ? (
            <ScrollLink to={val.toLowerCase()} smooth={true} duration={500}>
              <span
                onClick={props.clickEvent}
                className={`${props.hover} text-gray-${props.color} px-1 duration-150 cursor-pointer`}>
                {val}
              </span>
            </ScrollLink>
          ) : (
            <Link href={'/#' + val.toLowerCase()}>
              <span
                onClick={props.clickEvent}
                className={`${props.hover} text-gray-${props.color} px-1 duration-150 cursor-pointer`}>
                {val}
              </span>
            </Link>
          )}
        </li>
      ))}
    </>
  )
}
export default NavList
