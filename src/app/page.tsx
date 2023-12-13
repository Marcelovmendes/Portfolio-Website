import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800 text-white h-screen overflow-hidden">
      <Head>
        <title>Portfolio Marcelo</title>
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>
    </div>
  );
}

export default Home;
