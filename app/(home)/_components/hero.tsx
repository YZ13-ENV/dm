import Image from "next/image";
import React from "react";
import Line from "./line";
import { BiRightArrowAlt } from "react-icons/bi";

const Hero = () => {

  return (
    <div id="hero" style={{ minHeight: 'calc(100dvh - 96px)' }} className="w-full overflow-visible mt-[96px] relative">
      <Image
      className="z-[-1] -top-[72px] absolute"
      src='/star-field-7.png'
      fill
      alt="star-field"
      />
      {/* <div className="w-full "></div> */}
      {/* <Image
        src={light}
        className="-z-[1] object-cover"
        placeholder={`data:image/${light.blurDataURL}`}
        blurDataURL={light.blurDataURL}
        fill
        alt="light"
      /> */}
      <main style={{ minHeight: 'calc(100dvh - 96px - (18rem / 2))' }}
      className="w-full h-full max-w-screen-2xl mx-auto md:px-28 px-6 flex flex-col items-center justify-center gap-6 z-[-1]">
        <div className="w-full h-fit flex flex-col gap-4 justify-center items-center py-2">
          <Image src='/dm-star-dark.svg' width={64} height={64} alt='dm-star-logo' />
          <h1 className="text-5xl">Darkmaterial</h1>
          <span className="text-muted-foreground text-lg text-center">
            DM помогает расширить возможности при работе, и поиске вдохновения, <br />
            здесь вы можете построить свои планы и вдохновиться на новые проекты.
          </span>
        </div>
        <div className="relative w-full justify-center h-fit flex items-center gap-4">
          <Line className="absolute right-0 -top-4 w-full" />
          <Line className="absolute left-0 -bottom-4 w-full" />
          <div className="home-card-wrapper">
            <Line orientation="vertical" className="absolute -right-4 top-0 h-[30rem]" />
            <Line orientation="vertical" className="absolute -left-4 bottom-0 h-[30rem]" />

            <div className="home-card group">
              <div className="w-full bottom-0 left-0 absolute h-fit flex items-center justify-between p-4">
                <div className="w-fit flex flex-col">
                  <span className="text-base">Производительность</span>
                  <span className="text-base text-muted-foreground">Начните планировать и повысьте производительность</span>
                </div>
                <BiRightArrowAlt size={24} className='text-muted-foreground group-hover:text-accent-foreground transition-colors' />
              </div>
            </div>

            <div className="home-card group">
              <div className="w-full bottom-0 left-0 absolute h-fit flex items-center justify-between p-4">
                <div className="w-fit flex flex-col">
                  <span className="text-base">Творчество</span>
                  <span className="text-base text-muted-foreground">Создайте портфолио загрузив работы в профиль</span>
                </div>
                <BiRightArrowAlt size={24} className='text-muted-foreground group-hover:text-accent-foreground transition-colors' />
              </div>
            </div>

          </div>
        </div>
      </main>
      <div className="w-full h-72 absolute bottom-0 flex items-end z-[-1]">
        <Image src='/bottom-light.png' fill alt='light-image' />
        <Line variant="primary" />
      </div>
    </div>
  );
};

export default Hero;
