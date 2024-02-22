import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800 text-white h-full snap-mandatory overflow-hidden z-0">
      <Head>
        <title>Portfolio Marcelo</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}

export default Home;
