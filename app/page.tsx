import Carousel from "@/components/Carousel";
import Hero from "./Hero";
import Main from "./Main";
import BgImage from "@/components/BgImage";
import ShoulderBag from "@/components/ShoulderBag";
import { LeatherBagData, ShoulderBagData, TateBagData } from "./shoes";

export default function Home() {
  return (
    <div>
      <Main />
      {/* @ts-expect-error Server Component */}
      <Hero />
      <Carousel
        data={TateBagData}
        title="Tate Bags"
        link="https://github.com"
      />
      <Carousel
        data={ShoulderBagData}
        title="Shoulder Bag"
        link="https://facebook.com"
      />
      <BgImage />
      <Carousel
        data={LeatherBagData}
        title="Leather Bag"
        link="https://google.com"
      />
      {/* <ShoulderBag /> */}
    </div>
  );
}
