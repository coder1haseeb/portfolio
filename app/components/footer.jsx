// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white" aria-label="Footer">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <section className="flex flex-col md:flex-row items-center justify-between">
          <address className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/developer-haseeb/" className="text-[#16f2b3]" aria-label="Visit M Haseeb's LinkedIn">M Haseeb</Link>
          </address>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/coder1haseeb/portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              aria-label="Star on GitHub"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/coder1haseeb/portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              aria-label="Fork the repository on GitHub"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
