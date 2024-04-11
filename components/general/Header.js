import Link from "next/link";

export default function Header() {
  return (
    <>
      <section id="header">
        <div id="siteLogoContain">
          <div id="siteLogo">
            <Link href="/">Hand Therapy Blog</Link>
          </div>
        </div>
        <div id="headerMenuContain">
          <ul id="headerMenu">
            <li className="headerMenuItem">
              <Link className="headerMenuLink" href="/articles">
                Articles
              </Link>
            </li>
            <li className="headerMenuItem">
              <Link className="headerMenuLink" href="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
