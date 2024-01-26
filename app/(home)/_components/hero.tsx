import Image from 'next/image'
import React from 'react'
import HeroText from './hero-text'
import light from '@/public/light.webp'

const Hero = () => {
  return (
    <div className="w-full overflow-visible relative h-[100dvh]">
        <Image src={light} className='-z-[1] object-cover'
        placeholder={`data:image/${light.blurDataURL}`} blurDataURL={light.blurDataURL} fill alt='light' />
        {/* <RemoteServerLogo  dark={config.remote.logo.dark} light={config.remote.logo.light} size={128} alt="dm-logo" /> */}
        <main className="relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 h-full">
            <div className="flex flex-col items-center justify-center w-full gap-4 px-4 mt-12 h-fit">
                <HeroText />
            </div>
        </main>
    </div>
  )
}

export default Hero