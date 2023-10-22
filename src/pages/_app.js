import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import { Montserrat, Inter, Roboto_Mono } from "next/font/google";

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
  return (
    <main
      className={`${montserrat.variable} ${roboto_mono.variable} font-mont dark:bg-dark`}
    >
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
