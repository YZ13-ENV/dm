import Image from "next/image";
import React from "react";
import HeroText from "./hero-text";
import light from "@/public/light.webp";
import { Separator } from "@/components/ui/separator";
import type { SeparatorProps } from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Hero = () => {
  const Line = ({
      orientation='horizontal',
      className,
      variant='secondary'
    }: SeparatorProps & { variant?: 'primary' | 'secondary' }) => {
    return (
      <div className={cn(
        'relative',
        orientation === 'horizontal' ? 'w-full' : 'h-full',
        className
      )}>
        <div className={cn(
          "absolute w-full h-full from-background via-transparent to-background z-10",
          orientation === 'horizontal' ? 'bg-gradient-to-r' : 'bg-gradient-to-b'
        )} />
        <Separator orientation={orientation} className={variant === 'secondary' ? '' : 'line-primary'} />
      </div>
    )
  }
  return (
    <div style={{ height: 'calc(100dvh - 76px)' }} className="w-full overflow-visible relative pt-6">
      {/* <div className="w-full "></div> */}
      {/* <Image
        src={light}
        className="-z-[1] object-cover"
        placeholder={`data:image/${light.blurDataURL}`}
        blurDataURL={light.blurDataURL}
        fill
        alt="light"
      /> */}
      {/* <RemoteServerLogo  dark={config.remote.logo.dark} light={config.remote.logo.light} size={128} alt="dm-logo" /> */}
      {/* <main className="relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 h-full"> */}
        {/* <div className="flex flex-col items-center justify-center w-full gap-4 px-4 mt-12 h-fit"> */}
          {/* <HeroText /> */}
        {/* </div> */}
      {/* </main> */}
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
            <Line orientation="vertical" className="absolute -right-4 top-0 h-96" />
            <Line orientation="vertical" className="absolute -left-4 bottom-0 h-96" />
            <div className="h-64 aspect-[4/3] border hover:border-primary transition-colors cursor-pointer rounded-lg"></div>
            <div className="h-64 aspect-[4/3] border hover:border-primary transition-colors cursor-pointer rounded-lg"></div>
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
