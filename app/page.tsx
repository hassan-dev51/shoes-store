import Carousel from "@/components/Carousel";
import Hero from "./Hero";
import Main from "./Main";
import BgImage from "@/components/BgImage";
import ShoulderBag from "@/components/ShoulderBag";

export default function Home() {
  return (
    <div>
      <Main />
      {/* @ts-expect-error Server Component */}
      <Hero />
      <Carousel />
      <BgImage />
      <ShoulderBag />
    </div>
  );
}
