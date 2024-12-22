import React from 'react'
import LogoImg from '/public/images/logo.svg'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
         <Image src={LogoImg} alt='logo' />
    </>
  )
}

export default Logo