import { Roboto } from "next/font/google";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
const robo = Roboto({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={`logo ${robo.className}`}>
          <h1>
            Green <br /> Leg
          </h1>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link href={""}>New Arrival</Link>
            </li>
            <li>
              <Link href={""}>Women</Link>
            </li>
            <li>
              <Link href={""}>Men</Link>
            </li>
            <li>
              <Link href={""}>Kids</Link>
            </li>
          </ul>
        </div>
        <div className="socail-links">
          <AiOutlineShoppingCart />
          <AiOutlineSearch />
          <AiOutlineHeart />
          <AiOutlineUser />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
