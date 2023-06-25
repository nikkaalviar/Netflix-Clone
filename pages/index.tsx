import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div
      className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />

      <main>
        <Banner />
      </main>
    </div>
  );
};

export default Home;
