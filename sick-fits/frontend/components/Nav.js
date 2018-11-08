import Link from "next/link";

const Nav = () => (
  <div>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    <Link href="/">
      <a>Go Back Home!</a>
    </Link>
    <Link href="/about">
      <a>About Us!</a>
    </Link>
  </div>
);

export default Nav;
