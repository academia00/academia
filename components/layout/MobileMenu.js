import Link from "next/link";

const MobileMenu = () => {
  return (
    <>
      <ul className="navigation clearfix">
        <li class="current ">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page-about">About</Link>
        </li>
        <li>
          <Link href="/page-team">Team </Link>
        </li>
        <li>
          <Link href="/page-courses">Courses </Link>
        </li>
        <li>
          <Link href="/page-contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
