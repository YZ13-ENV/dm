import Image from "next/image";
import HeroCard from "../hero/hero-card";
import { cdn } from "api";


export default function FrameCard() {
  return (
    <HeroCard
      name="Творчество"
      description="Создайте портфолио загрузив работы в профиль"
      link="https://frame.darkmaterial.space"
    >
      <Image
        src="/grid.svg"
        fill
        alt="grid"
        className="object-cover scale-150 opacity-50"
      />
      <Image
        src={cdn("dm/icons/frame-dark.svg")}
        width={80}
        height={80}
        alt="logo"
        className="z-10 self-center"
      />
    </HeroCard>
  )
}