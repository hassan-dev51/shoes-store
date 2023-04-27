import Image from "next/image";
import { Shoes, getShoes } from "./shoes";
import Link from "next/link";

const Hero = async () => {
  const data = await getShoes();
  return (
    <section className="hero-section">
      <div className="hero-heading">
        <h1>Popular</h1>
        <h2>Right Now</h2>
      </div>
      <div className="card-div">
        {data.map((item: Shoes) => (
          <div key={item.id} className="card">
            <Link href={`product/${item.id}`}>
              <div className="card-image">
                <Image
                  src={`${item.image}`}
                  alt={item.name}
                  height={200}
                  width={200}
                />
              </div>
              <h1 className="card-name">{item.name}</h1>
              <h3>{item.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
