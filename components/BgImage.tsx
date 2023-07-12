import Link from "next/link";

const BgImage = () => {
  return (
    <Link href="">
      <div className="banner-image">
        <div className="banner-heading">
          <h1>Ethically Manufactured</h1>
          <h2>Suitable for vegans BPA free</h2>
          <button>Shop Now</button>
        </div>
      </div>
    </Link>
  );
};

export default BgImage;
