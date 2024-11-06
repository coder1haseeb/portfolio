// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-transparent">
      <nav className="flex items-center justify-between py-5" aria-label="Main Navigation">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold"
            aria-label="Go to M Haseeb Idrees's Home Page">
            M Haseeb Idrees
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
          role="navigation"
          aria-label="Sections Navigation">
          <li>
            <Link
              href="/#about-haseeb-idrees-software-engineer"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              aria-label="Learn more About M Haseeb Idrees">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/#experience-haseeb-idrees-software-engineer"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              aria-label="View M Haseeb Idrees's Experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/#skills-haseeb-idrees-software-engineer"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              aria-label="Discover M Haseeb Idrees's Skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/#education-haseeb-idrees-software-engineer"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              aria-label="Learn about M Haseeb Idrees's Education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </Link>
          </li>
          {/* Uncomment this if you add a blog section in the future */}
          {/* <li>
            <Link
              href="/blog"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              aria-label="Read M Haseeb Idrees's Blogs">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                BLOGS
              </div>
            </Link>
          </li> */}
          <li>
            <Link
              href="/#projects-haseeb-idrees-software-engineer"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              aria-label="Explore Projects by M Haseeb Idrees">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
