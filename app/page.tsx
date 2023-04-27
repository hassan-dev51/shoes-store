import Hero from "./Hero";
import Main from "./Main";

export default function Home() {
  return (
    <div>
      <Main />
      {/* @ts-expect-error Server Component */}
      <Hero />
    </div>
  );
}
