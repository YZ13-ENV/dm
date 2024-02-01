import Image from "next/image";
import React from "react";
import Line from "../line";
import { cdn } from "api";
import HeroCard from "./hero-card";
import StarField from "./star-field";

const Hero = () => {

  const HeroContent = () => {
    return (
      <main style={{ minHeight: 'calc(100dvh - 96px - (18rem / 2))' }}
      className="w-full h-full max-w-screen-2xl mx-auto md:px-28 px-6 flex flex-col items-center justify-center gap-6 z-[-1]">
        <div className="flex flex-col items-center justify-center w-full gap-4 py-2 h-fit">
          <Image src='/dm-star-dark.svg' width={96} height={96} alt='dm-star-logo' />
          <h1 className="text-5xl">Darkmaterial</h1>
          <span className="text-lg text-center text-muted-foreground">
            DM помогает расширить возможности при работе, и поиске вдохновения, <br />
            здесь вы можете построить свои планы и вдохновиться на новые проекты.
          </span>
        </div>
        <div className="relative flex items-center justify-center w-full gap-4 h-fit">
          <Line className="absolute right-0 w-full -top-4" />
          <Line className="absolute left-0 w-full -bottom-4" />
          <div className="home-card-wrapper">
            <Line orientation="vertical" className="absolute -right-4 top-0 h-[30rem]" />
            <Line orientation="vertical" className="absolute -left-4 bottom-0 h-[30rem]" />
            <HeroCard
              disabled
              name="Производительность"
              description="Начните планировать и повысьте производительность"
            ></HeroCard>
            <HeroCard
              name="Творчество"
              description="Создайте портфолио загрузив работы в профиль"
              link="https://frame.darkmaterial.space"
            >
              <Image src='/grid.svg' fill alt='grid' className="object-cover scale-150 opacity-50" />
              <Image src={cdn('dm/icons/frame-dark.svg')} width={64} height={64} alt='logo' className="z-10 self-center" />
            </HeroCard>
          </div>
        </div>
      </main>
    )
  }
  return (
    <div id="hero" className="w-full h-screen overflow-visible flex flex-col items-center justify-center relative">
      <StarField starsCount={350} />
      <HeroContent />
      <div className="w-full h-72 absolute bottom-0 flex items-end z-[-1]">
        <Image src='/bottom-light.png' fill alt='light-image' />
        <Line variant="primary" />
      </div>
    </div>
  );
};

export default Hero;
