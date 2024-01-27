import Image from "next/image";
import React from "react";
import Line from "./line";

const Hero = () => {

  return (
    <div className="w-full h-[100dvh] overflow-visible relative">
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
      <main className="w-full h-full max-w-screen-2xl mx-auto md:px-28 px-6 flex flex-col items-center justify-center gap-6">
        <div className="w-full h-fit flex flex-col gap-4 justify-center items-center">
          <h1 className="text-5xl">Darkmaterial</h1>
          <span className="text-muted-foreground text-center">
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
            <div className="home-card"></div>
            <div className="home-card"></div>
          </div>
        </div>
      </main>
      <div className="w-full h-72 absolute bottom-0 flex items-end">
        <Image src='/bottom-light.png' fill alt='light-image' />
        <Line variant="primary" />
      </div>
    </div>
  );
};

export default Hero;
