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
  title: "M Haseeb Idrees - Software Engineer | CodeHaseeb",
  description:
    "Portfolio of M Haseeb Idrees, a full-stack software engineer. Explore my projects, collaborations, and services. Specializing in React, Next.js, Node.js, and more.",
  keywords: [
    "Haseeb Idrees",
    "M Haseeb Idrees",
    "Haseeb software engineer",
    "code Haseeb",
    "codehaseeb",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "MERN Stack Developer",
    "mhaseeb.webdev",
    "mhaseeb.webdev@gmail.com",
    "web engineer",
    "Software Developer & Web Engineer"
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
