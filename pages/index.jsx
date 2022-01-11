import Head from "next/head";
import Hero from "../components/Hero/Hero";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Block Game Capital</title>
      </Head>
      <main className={styles.body}>
        <Hero />
      </main>
    </>
  );
}
