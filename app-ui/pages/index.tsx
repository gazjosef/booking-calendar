import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Booking App UI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Navbar />
        </header>
        <h1>Hello World</h1>
      </main>
    </>
  );
}
