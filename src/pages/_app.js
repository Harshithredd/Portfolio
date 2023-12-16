import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat, Inter, Roboto_Mono } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main
      className={`${montserrat.variable} ${roboto_mono.variable} font-mont
       dark:bg-dark bg-light w-full min-h-screen overflow-x-hidden`}
    >
      <NavBar />
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
