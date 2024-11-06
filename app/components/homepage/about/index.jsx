// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about-haseeb-idrees-software-engineer" className="my-12 lg:my-16 relative" aria-labelledby="about-me-title">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md" id="about-me-title">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        <figure className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={300}
            height={280}
            alt="M Haseeb Idrees - Software Developer"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
          <figcaption className="sr-only">M Haseeb Idrees - Software Developer</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default AboutSection;
