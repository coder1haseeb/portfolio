import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "M Haseeb Idrees - Software Engineer, Full Stack Developer | CodeHaseeb",
  description:
    "Welcome to the portfolio of M Haseeb Idrees, a professional software engineer specializing in full-stack development. Explore projects in React, Next.js, Node.js, and more.",
  keywords: [
    "Haseeb Idrees",
    "M Haseeb Idrees",
    "M Haseeb",
    "Code Haseeb",
    "codehaseeb",
    "Haseeb software engineer",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "MERN Stack Developer",
    "Software Developer & Web Engineer",
    "web engineer",
  ],
  icons: {
    icon: './favicon.ico', // /public path
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon"  href='app\favicon.ico' /> {/* Add favicon here */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <title>{metadata.title}</title>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "M Haseeb Idrees | Haseeb Idrees",
              "alternateName": "Code Haseeb",
              "description": "Welcome to the portfolio of M Haseeb Idrees, a professional software engineer specializing in full-stack development. Explore projects in React, Next.js, Node.js, and more.",
              "email": "coder.haseeb@gmail.com",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "CodeHaseeb"
              },
              "sameAs": [
                "https://linkedin.com/in/haseeb.idrees.1656",
                "https://github.com/coder1haseeb",
                "https://wa.me/+923414443962",
                "https://codehaseeb.online"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "PK"
              }
            }
          `}
        </script>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
